import React, { useRef, useState, useImperativeHandle, useCallback, useEffect } from 'react';
import * as pageFlipModule from 'page-flip';

const PageFlipClass = pageFlipModule.PageFlip || pageFlipModule.default?.PageFlip || pageFlipModule.default;

const HTMLFlipBook = React.forwardRef((props, ref) => {
  const htmlElementRef = useRef(null);
  const childRef = useRef([]);
  const pageFlipInstance = useRef(null);
  const [pages, setPages] = useState([]);

  useImperativeHandle(ref, () => ({
    pageFlip: () => pageFlipInstance.current,
  }));

  const removeHandlers = useCallback(() => {
    const flip = pageFlipInstance.current;
    if (flip) {
      flip.off('flip');
      flip.off('changeOrientation');
      flip.off('changeState');
      flip.off('init');
      flip.off('update');
    }
  }, []);

  // Update children refs
  useEffect(() => {
    childRef.current = [];
    if (props.children) {
      const childList = React.Children.map(props.children, (child) => {
        if (!child) return null;
        return React.cloneElement(child, {
          ref: (dom) => {
            if (dom) {
              childRef.current.push(dom);
            }
          },
        });
      }).filter(Boolean);

      setPages(childList);
    }
  }, [props.children]);

  // Initialize or update PageFlip
  useEffect(() => {
    if (!htmlElementRef.current || pages.length === 0 || childRef.current.length === 0) {
      return;
    }

    const setHandlers = () => {
      const flip = pageFlipInstance.current;
      if (flip) {
        if (props.onFlip) {
          flip.on('flip', (e) => props.onFlip(e));
        }
        if (props.onChangeOrientation) {
          flip.on('changeOrientation', (e) => props.onChangeOrientation(e));
        }
        if (props.onChangeState) {
          flip.on('changeState', (e) => props.onChangeState(e));
        }
        if (props.onInit) {
          flip.on('init', (e) => props.onInit(e));
        }
        if (props.onUpdate) {
          flip.on('update', (e) => props.onUpdate(e));
        }
      }
    };

    removeHandlers();

    if (!pageFlipInstance.current) {
      pageFlipInstance.current = new PageFlipClass(htmlElementRef.current, {
        width: props.width || 550,
        height: props.height || 733,
        size: props.size || 'stretch',
        minWidth: props.minWidth || 320,
        maxWidth: props.maxWidth || 1000,
        minHeight: props.minHeight || 420,
        maxHeight: props.maxHeight || 1350,
        maxShadowOpacity: props.maxShadowOpacity ?? 0.5,
        showCover: props.showCover ?? true,
        mobileScrollSupport: props.mobileScrollSupport ?? true,
        flippingTime: props.flippingTime || 700,
        usePortrait: props.usePortrait ?? true,
        startPage: props.startPage || 0,
        drawShadow: props.drawShadow ?? true,
        autoSize: props.autoSize ?? true,
      });

      pageFlipInstance.current.loadFromHTML(childRef.current);
    } else {
      if (!pageFlipInstance.current.getFlipController()) {
        pageFlipInstance.current.loadFromHTML(childRef.current);
      } else {
        pageFlipInstance.current.updateFromHtml(childRef.current);
      }
    }

    setHandlers();

    return () => {
      removeHandlers();
    };
  }, [pages, props, removeHandlers]);

  // Clean up instance on unmount
  useEffect(() => {
    return () => {
      if (pageFlipInstance.current) {
        try {
          pageFlipInstance.current.destroy();
        } catch (e) {
          // ignore cleanup errors
        }
        pageFlipInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={htmlElementRef}
      className={props.className}
      style={{ margin: '0 auto', ...props.style }}
    >
      {pages}
    </div>
  );
});

HTMLFlipBook.displayName = 'HTMLFlipBook';
export default React.memo(HTMLFlipBook);
