import {
  LightgalleryComponent,
  LightgalleryModule
} from "./chunk-EKBW3B5U.js";
import {
  Swiper,
  createElement,
  elementTransitionEnd,
  getSlideTransformEl,
  getWindow,
  nextTick,
  now
} from "./chunk-6ZN2N5QW.js";
import {
  FooterComponent
} from "./chunk-CEPP7PIH.js";
import "./chunk-7KRE5D5Y.js";
import {
  require_aos
} from "./chunk-EOCJYYK5.js";
import {
  DataService
} from "./chunk-QYVCNCEX.js";
import {
  SlickCarouselComponent,
  SlickCarouselModule,
  SlickItemDirective
} from "./chunk-DCWI5FF7.js";
import {
  routes
} from "./chunk-F53JZPBU.js";
import "./chunk-IKOSZIEY.js";
import {
  Router,
  RouterLink
} from "./chunk-M6KR3YQW.js";
import "./chunk-RCTWWQ4X.js";
import "./chunk-TLD64Y2W.js";
import {
  CommonModule
} from "./chunk-5DIP3EXV.js";
import "./chunk-SS7FF3CJ.js";
import {
  Component,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-VTSSTHJF.js";
import {
  __toESM
} from "./chunk-4MWRP73S.js";

// src/app/features/home-list/home/home.component.ts
var AOS = __toESM(require_aos());

// node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var zoomSettings = {
  scale: 1,
  zoom: true,
  infiniteZoom: true,
  actualSize: true,
  showZoomInOutIcons: false,
  actualSizeIcons: {
    zoomIn: "lg-zoom-in",
    zoomOut: "lg-zoom-out"
  },
  enableZoomAfter: 300,
  zoomPluginStrings: {
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    viewActualSize: "View actual size"
  }
};
var lGEvents = {
  afterAppendSlide: "lgAfterAppendSlide",
  init: "lgInit",
  hasVideo: "lgHasVideo",
  containerResize: "lgContainerResize",
  updateSlides: "lgUpdateSlides",
  afterAppendSubHtml: "lgAfterAppendSubHtml",
  beforeOpen: "lgBeforeOpen",
  afterOpen: "lgAfterOpen",
  slideItemLoad: "lgSlideItemLoad",
  beforeSlide: "lgBeforeSlide",
  afterSlide: "lgAfterSlide",
  posterClick: "lgPosterClick",
  dragStart: "lgDragStart",
  dragMove: "lgDragMove",
  dragEnd: "lgDragEnd",
  beforeNextSlide: "lgBeforeNextSlide",
  beforePrevSlide: "lgBeforePrevSlide",
  beforeClose: "lgBeforeClose",
  afterClose: "lgAfterClose",
  rotateLeft: "lgRotateLeft",
  rotateRight: "lgRotateRight",
  flipHorizontal: "lgFlipHorizontal",
  flipVertical: "lgFlipVertical",
  autoplay: "lgAutoplay",
  autoplayStart: "lgAutoplayStart",
  autoplayStop: "lgAutoplayStop"
};
var ZOOM_TRANSITION_DURATION = 500;
var Zoom = (
  /** @class */
  (function() {
    function Zoom3(instance, $LG) {
      this.core = instance;
      this.$LG = $LG;
      this.settings = __assign(__assign({}, zoomSettings), this.core.settings);
      return this;
    }
    Zoom3.prototype.buildTemplates = function() {
      var zoomIcons = this.settings.showZoomInOutIcons ? '<button id="' + this.core.getIdName("lg-zoom-in") + '" type="button" aria-label="' + this.settings.zoomPluginStrings["zoomIn"] + '" class="lg-zoom-in lg-icon"></button><button id="' + this.core.getIdName("lg-zoom-out") + '" type="button" aria-label="' + this.settings.zoomPluginStrings["zoomOut"] + '" class="lg-zoom-out lg-icon"></button>' : "";
      if (this.settings.actualSize) {
        zoomIcons += '<button id="' + this.core.getIdName("lg-actual-size") + '" type="button" aria-label="' + this.settings.zoomPluginStrings["viewActualSize"] + '" class="' + this.settings.actualSizeIcons.zoomIn + ' lg-icon"></button>';
      }
      this.core.outer.addClass("lg-use-transition-for-zoom");
      this.core.$toolbar.first().append(zoomIcons);
    };
    Zoom3.prototype.enableZoom = function(event2) {
      var _this = this;
      var _speed = this.settings.enableZoomAfter + event2.detail.delay;
      if (this.$LG("body").first().hasClass("lg-from-hash") && event2.detail.delay) {
        _speed = 0;
      } else {
        this.$LG("body").first().removeClass("lg-from-hash");
      }
      this.zoomableTimeout = setTimeout(function() {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        _this.core.getSlideItem(event2.detail.index).addClass("lg-zoomable");
        if (event2.detail.index === _this.core.index) {
          _this.setZoomEssentials();
        }
      }, _speed + 30);
    };
    Zoom3.prototype.enableZoomOnSlideItemLoad = function() {
      this.core.LGel.on(lGEvents.slideItemLoad + ".zoom", this.enableZoom.bind(this));
    };
    Zoom3.prototype.getDragCords = function(e) {
      return {
        x: e.pageX,
        y: e.pageY
      };
    };
    Zoom3.prototype.getSwipeCords = function(e) {
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
      return {
        x,
        y
      };
    };
    Zoom3.prototype.getDragAllowedAxises = function(scale, scaleDiff) {
      if (!this.containerRect) {
        return {
          allowX: false,
          allowY: false
        };
      }
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first().get();
      var height = 0;
      var width = 0;
      var rect = $image.getBoundingClientRect();
      if (scale) {
        height = $image.offsetHeight * scale;
        width = $image.offsetWidth * scale;
      } else if (scaleDiff) {
        height = rect.height + scaleDiff * rect.height;
        width = rect.width + scaleDiff * rect.width;
      } else {
        height = rect.height;
        width = rect.width;
      }
      var allowY = height > this.containerRect.height;
      var allowX = width > this.containerRect.width;
      return {
        allowX,
        allowY
      };
    };
    Zoom3.prototype.setZoomEssentials = function() {
      this.containerRect = this.core.$content.get().getBoundingClientRect();
    };
    Zoom3.prototype.zoomImage = function(scale, scaleDiff, reposition, resetToMax) {
      if (Math.abs(scaleDiff) <= 0)
        return;
      var offsetX = this.containerRect.width / 2 + this.containerRect.left;
      var offsetY = this.containerRect.height / 2 + this.containerRect.top + this.scrollTop;
      var originalX;
      var originalY;
      if (scale === 1) {
        this.positionChanged = false;
      }
      var dragAllowedAxises = this.getDragAllowedAxises(0, scaleDiff);
      var allowY = dragAllowedAxises.allowY, allowX = dragAllowedAxises.allowX;
      if (this.positionChanged) {
        originalX = this.left / (this.scale - scaleDiff);
        originalY = this.top / (this.scale - scaleDiff);
        this.pageX = offsetX - originalX;
        this.pageY = offsetY - originalY;
        this.positionChanged = false;
      }
      var possibleSwipeCords = this.getPossibleSwipeDragCords(scaleDiff);
      var x;
      var y;
      var _x = offsetX - this.pageX;
      var _y = offsetY - this.pageY;
      if (scale - scaleDiff > 1) {
        var scaleVal = (scale - scaleDiff) / Math.abs(scaleDiff);
        _x = (scaleDiff < 0 ? -_x : _x) + this.left * (scaleVal + (scaleDiff < 0 ? -1 : 1));
        _y = (scaleDiff < 0 ? -_y : _y) + this.top * (scaleVal + (scaleDiff < 0 ? -1 : 1));
        x = _x / scaleVal;
        y = _y / scaleVal;
      } else {
        var scaleVal = (scale - scaleDiff) * scaleDiff;
        x = _x * scaleVal;
        y = _y * scaleVal;
      }
      if (reposition) {
        if (allowX) {
          if (this.isBeyondPossibleLeft(x, possibleSwipeCords.minX)) {
            x = possibleSwipeCords.minX;
          } else if (this.isBeyondPossibleRight(x, possibleSwipeCords.maxX)) {
            x = possibleSwipeCords.maxX;
          }
        } else {
          if (scale > 1) {
            if (x < possibleSwipeCords.minX) {
              x = possibleSwipeCords.minX;
            } else if (x > possibleSwipeCords.maxX) {
              x = possibleSwipeCords.maxX;
            }
          }
        }
        if (allowY) {
          if (this.isBeyondPossibleTop(y, possibleSwipeCords.minY)) {
            y = possibleSwipeCords.minY;
          } else if (this.isBeyondPossibleBottom(y, possibleSwipeCords.maxY)) {
            y = possibleSwipeCords.maxY;
          }
        } else {
          if (scale > 1) {
            if (y < possibleSwipeCords.minY) {
              y = possibleSwipeCords.minY;
            } else if (y > possibleSwipeCords.maxY) {
              y = possibleSwipeCords.maxY;
            }
          }
        }
      }
      this.setZoomStyles({
        x,
        y,
        scale
      });
      this.left = x;
      this.top = y;
      if (resetToMax) {
        this.setZoomImageSize();
      }
    };
    Zoom3.prototype.resetImageTranslate = function(index) {
      if (!this.isImageSlide(index)) {
        return;
      }
      var $image = this.core.getSlideItem(index).find(".lg-image").first();
      this.imageReset = false;
      $image.removeClass("reset-transition reset-transition-y reset-transition-x");
      this.core.outer.removeClass("lg-actual-size");
      $image.css("width", "auto").css("height", "auto");
      setTimeout(function() {
        $image.removeClass("no-transition");
      }, 10);
    };
    Zoom3.prototype.setZoomImageSize = function() {
      var _this = this;
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      setTimeout(function() {
        var actualSizeScale = _this.getCurrentImageActualSizeScale();
        if (_this.scale >= actualSizeScale) {
          $image.addClass("no-transition");
          _this.imageReset = true;
        }
      }, ZOOM_TRANSITION_DURATION);
      setTimeout(function() {
        var actualSizeScale = _this.getCurrentImageActualSizeScale();
        if (_this.scale >= actualSizeScale) {
          var dragAllowedAxises = _this.getDragAllowedAxises(_this.scale);
          $image.css("width", $image.get().naturalWidth + "px").css("height", $image.get().naturalHeight + "px");
          _this.core.outer.addClass("lg-actual-size");
          if (dragAllowedAxises.allowX && dragAllowedAxises.allowY) {
            $image.addClass("reset-transition");
          } else if (dragAllowedAxises.allowX && !dragAllowedAxises.allowY) {
            $image.addClass("reset-transition-x");
          } else if (!dragAllowedAxises.allowX && dragAllowedAxises.allowY) {
            $image.addClass("reset-transition-y");
          }
        }
      }, ZOOM_TRANSITION_DURATION + 50);
    };
    Zoom3.prototype.setZoomStyles = function(style) {
      var $imageWrap = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first();
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      var $dummyImage = this.core.outer.find(".lg-current .lg-dummy-img").first();
      this.scale = style.scale;
      $image.css("transform", "scale3d(" + style.scale + ", " + style.scale + ", 1)");
      $dummyImage.css("transform", "scale3d(" + style.scale + ", " + style.scale + ", 1)");
      var transform = "translate3d(" + style.x + "px, " + style.y + "px, 0)";
      $imageWrap.css("transform", transform);
    };
    Zoom3.prototype.setActualSize = function(index, event2) {
      var _this = this;
      if (this.zoomInProgress) {
        return;
      }
      this.zoomInProgress = true;
      var currentItem = this.core.galleryItems[this.core.index];
      this.resetImageTranslate(index);
      setTimeout(function() {
        if (!currentItem.src || _this.core.outer.hasClass("lg-first-slide-loading")) {
          return;
        }
        var scale = _this.getCurrentImageActualSizeScale();
        var prevScale = _this.scale;
        if (_this.core.outer.hasClass("lg-zoomed")) {
          _this.scale = 1;
        } else {
          _this.scale = _this.getScale(scale);
        }
        _this.setPageCords(event2);
        _this.beginZoom(_this.scale);
        _this.zoomImage(_this.scale, _this.scale - prevScale, true, true);
      }, 50);
      setTimeout(function() {
        _this.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
      }, 60);
      setTimeout(function() {
        _this.zoomInProgress = false;
      }, ZOOM_TRANSITION_DURATION + 110);
    };
    Zoom3.prototype.getNaturalWidth = function(index) {
      var $image = this.core.getSlideItem(index).find(".lg-image").first();
      var naturalWidth = this.core.galleryItems[index].width;
      return naturalWidth ? parseFloat(naturalWidth) : $image.get().naturalWidth;
    };
    Zoom3.prototype.getActualSizeScale = function(naturalWidth, width) {
      var _scale;
      var scale;
      if (naturalWidth >= width) {
        _scale = naturalWidth / width;
        scale = _scale || 2;
      } else {
        scale = 1;
      }
      return scale;
    };
    Zoom3.prototype.getCurrentImageActualSizeScale = function() {
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      var width = $image.get().offsetWidth;
      var naturalWidth = this.getNaturalWidth(this.core.index) || width;
      return this.getActualSizeScale(naturalWidth, width);
    };
    Zoom3.prototype.getPageCords = function(event2) {
      var cords = {};
      if (event2) {
        cords.x = event2.pageX || event2.touches[0].pageX;
        cords.y = event2.pageY || event2.touches[0].pageY;
      } else {
        var containerRect = this.core.$content.get().getBoundingClientRect();
        cords.x = containerRect.width / 2 + containerRect.left;
        cords.y = containerRect.height / 2 + this.scrollTop + containerRect.top;
      }
      return cords;
    };
    Zoom3.prototype.setPageCords = function(event2) {
      var pageCords = this.getPageCords(event2);
      this.pageX = pageCords.x;
      this.pageY = pageCords.y;
    };
    Zoom3.prototype.manageActualPixelClassNames = function() {
      var $actualSize = this.core.getElementById("lg-actual-size");
      $actualSize.removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut);
    };
    Zoom3.prototype.beginZoom = function(scale) {
      this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging");
      if (scale > 1) {
        this.core.outer.addClass("lg-zoomed");
        this.manageActualPixelClassNames();
      } else {
        this.resetZoom();
      }
      return scale > 1;
    };
    Zoom3.prototype.getScale = function(scale) {
      var actualSizeScale = this.getCurrentImageActualSizeScale();
      if (scale < 1) {
        scale = 1;
      } else if (scale > actualSizeScale) {
        scale = actualSizeScale;
      }
      return scale;
    };
    Zoom3.prototype.init = function() {
      var _this = this;
      if (!this.settings.zoom) {
        return;
      }
      this.buildTemplates();
      this.enableZoomOnSlideItemLoad();
      var tapped = null;
      this.core.outer.on("dblclick.lg", function(event2) {
        if (!_this.$LG(event2.target).hasClass("lg-image")) {
          return;
        }
        _this.setActualSize(_this.core.index, event2);
      });
      this.core.outer.on("touchstart.lg", function(event2) {
        var $target = _this.$LG(event2.target);
        if (event2.touches.length === 1 && $target.hasClass("lg-image")) {
          if (!tapped) {
            tapped = setTimeout(function() {
              tapped = null;
            }, 300);
          } else {
            clearTimeout(tapped);
            tapped = null;
            event2.preventDefault();
            _this.setActualSize(_this.core.index, event2);
          }
        }
      });
      this.core.LGel.on(lGEvents.containerResize + ".zoom " + lGEvents.rotateRight + ".zoom " + lGEvents.rotateLeft + ".zoom " + lGEvents.flipHorizontal + ".zoom " + lGEvents.flipVertical + ".zoom", function() {
        if (!_this.core.lgOpened || !_this.isImageSlide(_this.core.index) || _this.core.touchAction) {
          return;
        }
        var _LGel = _this.core.getSlideItem(_this.core.index).find(".lg-img-wrap").first();
        _this.top = 0;
        _this.left = 0;
        _this.setZoomEssentials();
        _this.setZoomSwipeStyles(_LGel, { x: 0, y: 0 });
        _this.positionChanged = true;
      });
      this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function() {
        if (!_this.core.lgOpened)
          return;
        _this.scrollTop = _this.$LG(window).scrollTop();
      });
      this.core.getElementById("lg-zoom-out").on("click.lg", function() {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        var timeout = 0;
        if (_this.imageReset) {
          _this.resetImageTranslate(_this.core.index);
          timeout = 50;
        }
        setTimeout(function() {
          var scale = _this.scale - _this.settings.scale;
          if (scale < 1) {
            scale = 1;
          }
          _this.beginZoom(scale);
          _this.zoomImage(scale, -_this.settings.scale, true, !_this.settings.infiniteZoom);
        }, timeout);
      });
      this.core.getElementById("lg-zoom-in").on("click.lg", function() {
        _this.zoomIn();
      });
      this.core.getElementById("lg-actual-size").on("click.lg", function() {
        _this.setActualSize(_this.core.index);
      });
      this.core.LGel.on(lGEvents.beforeOpen + ".zoom", function() {
        _this.core.outer.find(".lg-item").removeClass("lg-zoomable");
      });
      this.core.LGel.on(lGEvents.afterOpen + ".zoom", function() {
        _this.scrollTop = _this.$LG(window).scrollTop();
        _this.pageX = _this.core.outer.width() / 2;
        _this.pageY = _this.core.outer.height() / 2 + _this.scrollTop;
        _this.scale = 1;
      });
      this.core.LGel.on(lGEvents.afterSlide + ".zoom", function(event2) {
        var prevIndex = event2.detail.prevIndex;
        _this.scale = 1;
        _this.positionChanged = false;
        _this.zoomInProgress = false;
        _this.resetZoom(prevIndex);
        _this.resetImageTranslate(prevIndex);
        if (_this.isImageSlide(_this.core.index)) {
          _this.setZoomEssentials();
        }
      });
      this.zoomDrag();
      this.pinchZoom();
      this.zoomSwipe();
      this.zoomableTimeout = false;
      this.positionChanged = false;
      this.zoomInProgress = false;
    };
    Zoom3.prototype.zoomIn = function() {
      if (!this.isImageSlide(this.core.index)) {
        return;
      }
      var scale = this.scale + this.settings.scale;
      if (!this.settings.infiniteZoom) {
        scale = this.getScale(scale);
      }
      this.beginZoom(scale);
      this.zoomImage(scale, Math.min(this.settings.scale, scale - this.scale), true, !this.settings.infiniteZoom);
    };
    Zoom3.prototype.resetZoom = function(index) {
      this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");
      var $actualSize = this.core.getElementById("lg-actual-size");
      var $item = this.core.getSlideItem(index !== void 0 ? index : this.core.index);
      $actualSize.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn);
      $item.find(".lg-img-wrap").first().removeAttr("style");
      $item.find(".lg-image").first().removeAttr("style");
      this.scale = 1;
      this.left = 0;
      this.top = 0;
      this.setPageCords();
    };
    Zoom3.prototype.getTouchDistance = function(e) {
      return Math.sqrt((e.touches[0].pageX - e.touches[1].pageX) * (e.touches[0].pageX - e.touches[1].pageX) + (e.touches[0].pageY - e.touches[1].pageY) * (e.touches[0].pageY - e.touches[1].pageY));
    };
    Zoom3.prototype.pinchZoom = function() {
      var _this = this;
      var startDist = 0;
      var pinchStarted = false;
      var initScale = 1;
      var prevScale = 0;
      var $item = this.core.getSlideItem(this.core.index);
      this.core.outer.on("touchstart.lg", function(e) {
        $item = _this.core.getSlideItem(_this.core.index);
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        if (e.touches.length === 2) {
          e.preventDefault();
          if (_this.core.outer.hasClass("lg-first-slide-loading")) {
            return;
          }
          initScale = _this.scale || 1;
          _this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging");
          _this.setPageCords(e);
          _this.resetImageTranslate(_this.core.index);
          _this.core.touchAction = "pinch";
          startDist = _this.getTouchDistance(e);
        }
      });
      this.core.$inner.on("touchmove.lg", function(e) {
        if (e.touches.length === 2 && _this.core.touchAction === "pinch" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          e.preventDefault();
          var endDist = _this.getTouchDistance(e);
          var distance = startDist - endDist;
          if (!pinchStarted && Math.abs(distance) > 5) {
            pinchStarted = true;
          }
          if (pinchStarted) {
            prevScale = _this.scale;
            var _scale = Math.max(1, initScale + -distance * 0.02);
            _this.scale = Math.round((_scale + Number.EPSILON) * 100) / 100;
            var diff = _this.scale - prevScale;
            _this.zoomImage(_this.scale, Math.round((diff + Number.EPSILON) * 100) / 100, false, false);
          }
        }
      });
      this.core.$inner.on("touchend.lg", function(e) {
        if (_this.core.touchAction === "pinch" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          pinchStarted = false;
          startDist = 0;
          if (_this.scale <= 1) {
            _this.resetZoom();
          } else {
            var actualSizeScale = _this.getCurrentImageActualSizeScale();
            if (_this.scale >= actualSizeScale) {
              var scaleDiff = actualSizeScale - _this.scale;
              if (scaleDiff === 0) {
                scaleDiff = 0.01;
              }
              _this.zoomImage(actualSizeScale, scaleDiff, false, true);
            }
            _this.manageActualPixelClassNames();
            _this.core.outer.addClass("lg-zoomed");
          }
          _this.core.touchAction = void 0;
        }
      });
    };
    Zoom3.prototype.touchendZoom = function(startCoords, endCoords, allowX, allowY, touchDuration) {
      var distanceXnew = endCoords.x - startCoords.x;
      var distanceYnew = endCoords.y - startCoords.y;
      var speedX = Math.abs(distanceXnew) / touchDuration + 1;
      var speedY = Math.abs(distanceYnew) / touchDuration + 1;
      if (speedX > 2) {
        speedX += 1;
      }
      if (speedY > 2) {
        speedY += 1;
      }
      distanceXnew = distanceXnew * speedX;
      distanceYnew = distanceYnew * speedY;
      var _LGel = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first();
      var distance = {};
      distance.x = this.left + distanceXnew;
      distance.y = this.top + distanceYnew;
      var possibleSwipeCords = this.getPossibleSwipeDragCords();
      if (Math.abs(distanceXnew) > 15 || Math.abs(distanceYnew) > 15) {
        if (allowY) {
          if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
            distance.y = possibleSwipeCords.minY;
          } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
            distance.y = possibleSwipeCords.maxY;
          }
        }
        if (allowX) {
          if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
            distance.x = possibleSwipeCords.minX;
          } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
            distance.x = possibleSwipeCords.maxX;
          }
        }
        if (allowY) {
          this.top = distance.y;
        } else {
          distance.y = this.top;
        }
        if (allowX) {
          this.left = distance.x;
        } else {
          distance.x = this.left;
        }
        this.setZoomSwipeStyles(_LGel, distance);
        this.positionChanged = true;
      }
    };
    Zoom3.prototype.getZoomSwipeCords = function(startCoords, endCoords, allowX, allowY, possibleSwipeCords) {
      var distance = {};
      if (allowY) {
        distance.y = this.top + (endCoords.y - startCoords.y);
        if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
          var diffMinY = possibleSwipeCords.minY - distance.y;
          distance.y = possibleSwipeCords.minY - diffMinY / 6;
        } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
          var diffMaxY = distance.y - possibleSwipeCords.maxY;
          distance.y = possibleSwipeCords.maxY + diffMaxY / 6;
        }
      } else {
        distance.y = this.top;
      }
      if (allowX) {
        distance.x = this.left + (endCoords.x - startCoords.x);
        if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
          var diffMinX = possibleSwipeCords.minX - distance.x;
          distance.x = possibleSwipeCords.minX - diffMinX / 6;
        } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
          var difMaxX = distance.x - possibleSwipeCords.maxX;
          distance.x = possibleSwipeCords.maxX + difMaxX / 6;
        }
      } else {
        distance.x = this.left;
      }
      return distance;
    };
    Zoom3.prototype.isBeyondPossibleLeft = function(x, minX) {
      return x >= minX;
    };
    Zoom3.prototype.isBeyondPossibleRight = function(x, maxX) {
      return x <= maxX;
    };
    Zoom3.prototype.isBeyondPossibleTop = function(y, minY) {
      return y >= minY;
    };
    Zoom3.prototype.isBeyondPossibleBottom = function(y, maxY) {
      return y <= maxY;
    };
    Zoom3.prototype.isImageSlide = function(index) {
      var currentItem = this.core.galleryItems[index];
      return this.core.getSlideType(currentItem) === "image";
    };
    Zoom3.prototype.getPossibleSwipeDragCords = function(scale) {
      var $image = this.core.getSlideItem(this.core.index).find(".lg-image").first();
      var bottom = this.core.mediaContainerPosition.bottom;
      var imgRect = $image.get().getBoundingClientRect();
      var imageHeight = imgRect.height;
      var imageWidth = imgRect.width;
      if (scale) {
        imageHeight = imageHeight + scale * imageHeight;
        imageWidth = imageWidth + scale * imageWidth;
      }
      var minY = (imageHeight - this.containerRect.height) / 2;
      var maxY = (this.containerRect.height - imageHeight) / 2 + bottom;
      var minX = (imageWidth - this.containerRect.width) / 2;
      var maxX = (this.containerRect.width - imageWidth) / 2;
      var possibleSwipeCords = {
        minY,
        maxY,
        minX,
        maxX
      };
      return possibleSwipeCords;
    };
    Zoom3.prototype.setZoomSwipeStyles = function(LGel, distance) {
      LGel.css("transform", "translate3d(" + distance.x + "px, " + distance.y + "px, 0)");
    };
    Zoom3.prototype.zoomSwipe = function() {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isMoved = false;
      var allowX = false;
      var allowY = false;
      var startTime = /* @__PURE__ */ new Date();
      var endTime = /* @__PURE__ */ new Date();
      var possibleSwipeCords;
      var _LGel;
      var $item = this.core.getSlideItem(this.core.index);
      this.core.$inner.on("touchstart.lg", function(e) {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        $item = _this.core.getSlideItem(_this.core.index);
        if ((_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && e.touches.length === 1 && _this.core.outer.hasClass("lg-zoomed")) {
          e.preventDefault();
          startTime = /* @__PURE__ */ new Date();
          _this.core.touchAction = "zoomSwipe";
          _LGel = _this.core.getSlideItem(_this.core.index).find(".lg-img-wrap").first();
          var dragAllowedAxises = _this.getDragAllowedAxises(0);
          allowY = dragAllowedAxises.allowY;
          allowX = dragAllowedAxises.allowX;
          if (allowX || allowY) {
            startCoords = _this.getSwipeCords(e);
          }
          possibleSwipeCords = _this.getPossibleSwipeDragCords();
          _this.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition");
        }
      });
      this.core.$inner.on("touchmove.lg", function(e) {
        if (e.touches.length === 1 && _this.core.touchAction === "zoomSwipe" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          e.preventDefault();
          _this.core.touchAction = "zoomSwipe";
          endCoords = _this.getSwipeCords(e);
          var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
          if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
            isMoved = true;
            _this.setZoomSwipeStyles(_LGel, distance);
          }
        }
      });
      this.core.$inner.on("touchend.lg", function(e) {
        if (_this.core.touchAction === "zoomSwipe" && (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target))) {
          e.preventDefault();
          _this.core.touchAction = void 0;
          _this.core.outer.removeClass("lg-zoom-dragging");
          if (!isMoved) {
            return;
          }
          isMoved = false;
          endTime = /* @__PURE__ */ new Date();
          var touchDuration = endTime.valueOf() - startTime.valueOf();
          _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
        }
      });
    };
    Zoom3.prototype.zoomDrag = function() {
      var _this = this;
      var startCoords = {};
      var endCoords = {};
      var isDragging = false;
      var isMoved = false;
      var allowX = false;
      var allowY = false;
      var startTime;
      var endTime;
      var possibleSwipeCords;
      var _LGel;
      this.core.outer.on("mousedown.lg.zoom", function(e) {
        if (!_this.isImageSlide(_this.core.index)) {
          return;
        }
        var $item = _this.core.getSlideItem(_this.core.index);
        if (_this.$LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) {
          startTime = /* @__PURE__ */ new Date();
          _LGel = _this.core.getSlideItem(_this.core.index).find(".lg-img-wrap").first();
          var dragAllowedAxises = _this.getDragAllowedAxises(0);
          allowY = dragAllowedAxises.allowY;
          allowX = dragAllowedAxises.allowX;
          if (_this.core.outer.hasClass("lg-zoomed")) {
            if (_this.$LG(e.target).hasClass("lg-object") && (allowX || allowY)) {
              e.preventDefault();
              startCoords = _this.getDragCords(e);
              possibleSwipeCords = _this.getPossibleSwipeDragCords();
              isDragging = true;
              _this.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging");
            }
          }
        }
      });
      this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function(e) {
        if (isDragging) {
          isMoved = true;
          endCoords = _this.getDragCords(e);
          var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);
          _this.setZoomSwipeStyles(_LGel, distance);
        }
      });
      this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function(e) {
        if (isDragging) {
          endTime = /* @__PURE__ */ new Date();
          isDragging = false;
          _this.core.outer.removeClass("lg-zoom-dragging");
          if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
            endCoords = _this.getDragCords(e);
            var touchDuration = endTime.valueOf() - startTime.valueOf();
            _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration);
          }
          isMoved = false;
        }
        _this.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
      });
    };
    Zoom3.prototype.closeGallery = function() {
      this.resetZoom();
      this.zoomInProgress = false;
    };
    Zoom3.prototype.destroy = function() {
      this.$LG(window).off(".lg.zoom.global" + this.core.lgId);
      this.core.LGel.off(".lg.zoom");
      this.core.LGel.off(".zoom");
      clearTimeout(this.zoomableTimeout);
      this.zoomableTimeout = false;
    };
    return Zoom3;
  })()
);
var lg_zoom_es5_default = Zoom;

// node_modules/lightgallery/plugins/video/lg-video.es5.js
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var videoSettings = {
  autoplayFirstVideo: true,
  youTubePlayerParams: false,
  vimeoPlayerParams: false,
  wistiaPlayerParams: false,
  gotoNextSlideOnVideoEnd: true,
  autoplayVideoOnSlide: false,
  videojs: false,
  videojsTheme: "",
  videojsOptions: {}
};
var lGEvents2 = {
  afterAppendSlide: "lgAfterAppendSlide",
  init: "lgInit",
  hasVideo: "lgHasVideo",
  containerResize: "lgContainerResize",
  updateSlides: "lgUpdateSlides",
  afterAppendSubHtml: "lgAfterAppendSubHtml",
  beforeOpen: "lgBeforeOpen",
  afterOpen: "lgAfterOpen",
  slideItemLoad: "lgSlideItemLoad",
  beforeSlide: "lgBeforeSlide",
  afterSlide: "lgAfterSlide",
  posterClick: "lgPosterClick",
  dragStart: "lgDragStart",
  dragMove: "lgDragMove",
  dragEnd: "lgDragEnd",
  beforeNextSlide: "lgBeforeNextSlide",
  beforePrevSlide: "lgBeforePrevSlide",
  beforeClose: "lgBeforeClose",
  afterClose: "lgAfterClose",
  rotateLeft: "lgRotateLeft",
  rotateRight: "lgRotateRight",
  flipHorizontal: "lgFlipHorizontal",
  flipVertical: "lgFlipVertical",
  autoplay: "lgAutoplay",
  autoplayStart: "lgAutoplayStart",
  autoplayStop: "lgAutoplayStop"
};
var param = function(obj) {
  return Object.keys(obj).map(function(k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
  }).join("&");
};
var paramsToObject = function(url) {
  var paramas = url.slice(1).split("&").map(function(p) {
    return p.split("=");
  }).reduce(function(obj, pair) {
    var _a = pair.map(decodeURIComponent), key = _a[0], value = _a[1];
    obj[key] = value;
    return obj;
  }, {});
  return paramas;
};
var getYouTubeParams = function(videoInfo, youTubePlayerParamsSettings) {
  if (!videoInfo.youtube)
    return "";
  var slideUrlParams = videoInfo.youtube[2] ? paramsToObject(videoInfo.youtube[2]) : "";
  var defaultYouTubePlayerParams = {
    wmode: "opaque",
    autoplay: 0,
    mute: 1,
    enablejsapi: 1
  };
  var playerParamsSettings = youTubePlayerParamsSettings || {};
  var youTubePlayerParams = __assign2(__assign2(__assign2({}, defaultYouTubePlayerParams), playerParamsSettings), slideUrlParams);
  var youTubeParams = "?" + param(youTubePlayerParams);
  return youTubeParams;
};
var isYouTubeNoCookie = function(url) {
  return url.includes("youtube-nocookie.com");
};
var getVimeoURLParams = function(defaultParams, videoInfo) {
  if (!videoInfo || !videoInfo.vimeo)
    return "";
  var urlParams = videoInfo.vimeo[2] || "";
  var defaultVimeoPlayerParams = Object.assign({}, {
    autoplay: 0,
    muted: 1
  }, defaultParams);
  var defaultPlayerParams = defaultVimeoPlayerParams && Object.keys(defaultVimeoPlayerParams).length !== 0 ? param(defaultVimeoPlayerParams) : "";
  var urlWithHash = videoInfo.vimeo[0].split("/").pop() || "";
  var urlWithHashWithParams = urlWithHash.split("?")[0] || "";
  var hash = urlWithHashWithParams.split("#")[0];
  var isPrivate = videoInfo.vimeo[1] !== hash;
  if (isPrivate) {
    urlParams = urlParams.replace("/" + hash, "");
  }
  urlParams = urlParams[0] == "?" ? "&" + urlParams.slice(1) : urlParams || "";
  var privateUrlParams = isPrivate ? "h=" + hash : "";
  defaultPlayerParams = privateUrlParams ? "&" + defaultPlayerParams : defaultPlayerParams;
  var vimeoPlayerParams = "?" + privateUrlParams + defaultPlayerParams + urlParams;
  return vimeoPlayerParams;
};
var Video = (
  /** @class */
  (function() {
    function Video2(instance) {
      this.core = instance;
      this.settings = __assign2(__assign2({}, videoSettings), this.core.settings);
      return this;
    }
    Video2.prototype.init = function() {
      var _this = this;
      this.core.LGel.on(lGEvents2.hasVideo + ".video", this.onHasVideo.bind(this));
      this.core.LGel.on(lGEvents2.posterClick + ".video", function() {
        var $el = _this.core.getSlideItem(_this.core.index);
        _this.loadVideoOnPosterClick($el);
      });
      this.core.LGel.on(lGEvents2.slideItemLoad + ".video", this.onSlideItemLoad.bind(this));
      this.core.LGel.on(lGEvents2.beforeSlide + ".video", this.onBeforeSlide.bind(this));
      this.core.LGel.on(lGEvents2.afterSlide + ".video", this.onAfterSlide.bind(this));
    };
    Video2.prototype.onSlideItemLoad = function(event2) {
      var _this = this;
      var _a = event2.detail, isFirstSlide = _a.isFirstSlide, index = _a.index;
      if (this.settings.autoplayFirstVideo && isFirstSlide && index === this.core.index) {
        setTimeout(function() {
          _this.loadAndPlayVideo(index);
        }, 200);
      }
      if (!isFirstSlide && this.settings.autoplayVideoOnSlide && index === this.core.index) {
        this.loadAndPlayVideo(index);
      }
    };
    Video2.prototype.onHasVideo = function(event2) {
      var _a = event2.detail, index = _a.index, src = _a.src, html5Video = _a.html5Video, hasPoster = _a.hasPoster;
      if (!hasPoster) {
        this.appendVideos(this.core.getSlideItem(index), {
          src,
          addClass: "lg-object",
          index,
          html5Video
        });
        this.gotoNextSlideOnVideoEnd(src, index);
      }
    };
    Video2.prototype.onBeforeSlide = function(event2) {
      if (this.core.lGalleryOn) {
        var prevIndex = event2.detail.prevIndex;
        this.pauseVideo(prevIndex);
      }
    };
    Video2.prototype.onAfterSlide = function(event2) {
      var _this = this;
      var _a = event2.detail, index = _a.index, prevIndex = _a.prevIndex;
      var $slide = this.core.getSlideItem(index);
      if (this.settings.autoplayVideoOnSlide && index !== prevIndex) {
        if ($slide.hasClass("lg-complete")) {
          setTimeout(function() {
            _this.loadAndPlayVideo(index);
          }, 100);
        }
      }
    };
    Video2.prototype.loadAndPlayVideo = function(index) {
      var $slide = this.core.getSlideItem(index);
      var currentGalleryItem = this.core.galleryItems[index];
      if (currentGalleryItem.poster) {
        this.loadVideoOnPosterClick($slide, true);
      } else {
        this.playVideo(index);
      }
    };
    Video2.prototype.playVideo = function(index) {
      this.controlVideo(index, "play");
    };
    Video2.prototype.pauseVideo = function(index) {
      this.controlVideo(index, "pause");
    };
    Video2.prototype.getVideoHtml = function(src, addClass, index, html5Video) {
      var video = "";
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      var currentGalleryItem = this.core.galleryItems[index];
      var videoTitle = currentGalleryItem.title || currentGalleryItem.alt;
      videoTitle = videoTitle ? 'title="' + videoTitle + '"' : "";
      var commonIframeProps = 'allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';
      if (videoInfo.youtube) {
        var videoId = "lg-youtube" + index;
        var youTubeParams = getYouTubeParams(videoInfo, this.settings.youTubePlayerParams);
        var isYouTubeNoCookieURL = isYouTubeNoCookie(src);
        var youtubeURL = isYouTubeNoCookieURL ? "//www.youtube-nocookie.com/" : "//www.youtube.com/";
        video = '<iframe allow="autoplay" id=' + videoId + ' class="lg-video-object lg-youtube ' + addClass + '" ' + videoTitle + ' src="' + youtubeURL + "embed/" + (videoInfo.youtube[1] + youTubeParams) + '" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.vimeo) {
        var videoId = "lg-vimeo" + index;
        var playerParams = getVimeoURLParams(this.settings.vimeoPlayerParams, videoInfo);
        video = '<iframe allow="autoplay" id=' + videoId + ' class="lg-video-object lg-vimeo ' + addClass + '" ' + videoTitle + ' src="//player.vimeo.com/video/' + (videoInfo.vimeo[1] + playerParams) + '" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.wistia) {
        var wistiaId = "lg-wistia" + index;
        var playerParams = param(this.settings.wistiaPlayerParams);
        playerParams = playerParams ? "?" + playerParams : "";
        video = '<iframe allow="autoplay" id="' + wistiaId + '" src="//fast.wistia.net/embed/iframe/' + (videoInfo.wistia[4] + playerParams) + '" ' + videoTitle + ' class="wistia_embed lg-video-object lg-wistia ' + addClass + '" name="wistia_embed" ' + commonIframeProps + "></iframe>";
      } else if (videoInfo.html5) {
        var html5VideoMarkup = "";
        for (var i = 0; i < html5Video.source.length; i++) {
          var type = html5Video.source[i].type;
          var typeAttr = type ? 'type="' + type + '"' : "";
          html5VideoMarkup += '<source src="' + html5Video.source[i].src + '" ' + typeAttr + ">";
        }
        if (html5Video.tracks) {
          var _loop_1 = function(i2) {
            var trackAttributes = "";
            var track = html5Video.tracks[i2];
            Object.keys(track || {}).forEach(function(key) {
              trackAttributes += key + '="' + track[key] + '" ';
            });
            html5VideoMarkup += "<track " + trackAttributes + ">";
          };
          for (var i = 0; i < html5Video.tracks.length; i++) {
            _loop_1(i);
          }
        }
        var html5VideoAttrs_1 = "";
        var videoAttributes_1 = html5Video.attributes || {};
        Object.keys(videoAttributes_1 || {}).forEach(function(key) {
          html5VideoAttrs_1 += key + '="' + videoAttributes_1[key] + '" ';
        });
        video = '<video class="lg-video-object lg-html5 ' + (this.settings.videojs && this.settings.videojsTheme ? this.settings.videojsTheme + " " : "") + " " + (this.settings.videojs ? " video-js" : "") + '" ' + html5VideoAttrs_1 + ">\n                " + html5VideoMarkup + "\n                Your browser does not support HTML5 video.\n            </video>";
      }
      return video;
    };
    Video2.prototype.appendVideos = function(el, videoParams) {
      var _a;
      var videoHtml = this.getVideoHtml(videoParams.src, videoParams.addClass, videoParams.index, videoParams.html5Video);
      el.find(".lg-video-cont").append(videoHtml);
      var $videoElement = el.find(".lg-video-object").first();
      if (videoParams.html5Video) {
        $videoElement.on("mousedown.lg.video", function(e) {
          e.stopPropagation();
        });
      }
      if (this.settings.videojs && ((_a = this.core.galleryItems[videoParams.index].__slideVideoInfo) === null || _a === void 0 ? void 0 : _a.html5)) {
        try {
          return videojs($videoElement.get(), this.settings.videojsOptions);
        } catch (e) {
          console.error("lightGallery:- Make sure you have included videojs");
        }
      }
    };
    Video2.prototype.gotoNextSlideOnVideoEnd = function(src, index) {
      var _this = this;
      var $videoElement = this.core.getSlideItem(index).find(".lg-video-object").first();
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      if (this.settings.gotoNextSlideOnVideoEnd) {
        if (videoInfo.html5) {
          $videoElement.on("ended", function() {
            _this.core.goToNextSlide();
          });
        } else if (videoInfo.vimeo) {
          try {
            new Vimeo.Player($videoElement.get()).on("ended", function() {
              _this.core.goToNextSlide();
            });
          } catch (e) {
            console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
          }
        } else if (videoInfo.wistia) {
          try {
            window._wq = window._wq || [];
            window._wq.push({
              id: $videoElement.attr("id"),
              onReady: function(video) {
                video.bind("end", function() {
                  _this.core.goToNextSlide();
                });
              }
            });
          } catch (e) {
            console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
          }
        }
      }
    };
    Video2.prototype.controlVideo = function(index, action) {
      var $videoElement = this.core.getSlideItem(index).find(".lg-video-object").first();
      var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
      if (!$videoElement.get())
        return;
      if (videoInfo.youtube) {
        try {
          $videoElement.get().contentWindow.postMessage('{"event":"command","func":"' + action + 'Video","args":""}', "*");
        } catch (e) {
          console.error("lightGallery:- " + e);
        }
      } else if (videoInfo.vimeo) {
        try {
          new Vimeo.Player($videoElement.get())[action]();
        } catch (e) {
          console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
        }
      } else if (videoInfo.html5) {
        if (this.settings.videojs) {
          try {
            videojs($videoElement.get())[action]();
          } catch (e) {
            console.error("lightGallery:- Make sure you have included videojs");
          }
        } else {
          $videoElement.get()[action]();
        }
      } else if (videoInfo.wistia) {
        try {
          window._wq = window._wq || [];
          window._wq.push({
            id: $videoElement.attr("id"),
            onReady: function(video) {
              video[action]();
            }
          });
        } catch (e) {
          console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
        }
      }
    };
    Video2.prototype.loadVideoOnPosterClick = function($el, forcePlay) {
      var _this = this;
      if (!$el.hasClass("lg-video-loaded")) {
        if (!$el.hasClass("lg-has-video")) {
          $el.addClass("lg-has-video");
          var _html = void 0;
          var _src = this.core.galleryItems[this.core.index].src;
          var video = this.core.galleryItems[this.core.index].video;
          if (video) {
            _html = typeof video === "string" ? JSON.parse(video) : video;
          }
          var videoJsPlayer_1 = this.appendVideos($el, {
            src: _src,
            addClass: "",
            index: this.core.index,
            html5Video: _html
          });
          this.gotoNextSlideOnVideoEnd(_src, this.core.index);
          var $tempImg = $el.find(".lg-object").first().get();
          $el.find(".lg-video-cont").first().append($tempImg);
          $el.addClass("lg-video-loading");
          videoJsPlayer_1 && videoJsPlayer_1.ready(function() {
            videoJsPlayer_1.on("loadedmetadata", function() {
              _this.onVideoLoadAfterPosterClick($el, _this.core.index);
            });
          });
          $el.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg", function() {
            setTimeout(function() {
              _this.onVideoLoadAfterPosterClick($el, _this.core.index);
            }, 50);
          });
        } else {
          this.playVideo(this.core.index);
        }
      } else if (forcePlay) {
        this.playVideo(this.core.index);
      }
    };
    Video2.prototype.onVideoLoadAfterPosterClick = function($el, index) {
      $el.addClass("lg-video-loaded");
      this.playVideo(index);
    };
    Video2.prototype.destroy = function() {
      this.core.LGel.off(".lg.video");
      this.core.LGel.off(".video");
    };
    return Video2;
  })()
);
var lg_video_es5_default = Video;

// node_modules/swiper/modules/mousewheel.mjs
function Mousewheel({
  swiper,
  extendParams,
  on,
  emit
}) {
  const window2 = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0;
    let pX = 0;
    let pY = 0;
    if ("detail" in e) {
      sY = e.detail;
    }
    if ("wheelDelta" in e) {
      sY = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      sX = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in e) {
      pY = e.deltaY;
    }
    if ("deltaX" in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      return false;
    }
    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      return true;
    }
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit("scroll", newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit("scroll", newEvent.raw);
    }
    lastScrollTime = new window2.Date().getTime();
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      return true;
    }
    return false;
  }
  function handle(event2) {
    let e = event2;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    if (event2.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent;
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
      else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event2
      };
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift();
      }
      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
      recentWheelEvents.push(newEvent);
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = void 0;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? "next" : "prev",
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          clearTimeout(timeout);
          timeout = void 0;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift();
          }
          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 0);
          }
          if (!timeout) {
            timeout = nextTick(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
            }, 500);
          }
        }
        if (!ignoreWheelEvents) emit("scroll", e);
        if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== "container") {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]("mouseenter", handleMouseEnter);
    targetEl[method]("mouseleave", handleMouseLeave);
    targetEl[method]("wheel", handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener("wheel", handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events("addEventListener");
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events("removeEventListener");
    swiper.mousewheel.enabled = false;
    return true;
  }
  on("init", () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on("destroy", () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}

// node_modules/swiper/shared/effect-init.mjs
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on("beforeInit", () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on("setTranslate _virtualUpdated", () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on("setTransition", (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on("transitionEnd", () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      swiper.slides.forEach((slideEl) => {
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
      });
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on("virtualUpdate", () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}

// node_modules/swiper/shared/effect-target.mjs
function effectTarget(effectParams, slideEl) {
  const transformEl = getSlideTransformEl(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = "hidden";
    transformEl.style["-webkit-backface-visibility"] = "hidden";
  }
  return transformEl;
}

// node_modules/swiper/shared/effect-virtual-transition-end.mjs
function effectVirtualTransitionEnd({
  swiper,
  duration,
  transformElements,
  allSlides
}) {
  const {
    activeIndex
  } = swiper;
  const getSlide = (el) => {
    if (!el.parentElement) {
      const slide = swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter((transformEl) => {
        const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach((el) => {
      elementTransitionEnd(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}

// node_modules/swiper/shared/create-shadow.mjs
function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}${suffix ? ` swiper-slide-shadow-${suffix}` : ""}`;
  const shadowContainer = getSlideTransformEl(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(" ").join(".")}`);
  if (!shadowEl) {
    shadowEl = createElement("div", shadowClass.split(" "));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}

// node_modules/swiper/modules/effect-cards.mjs
function EffectCards({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${(params.rotate || swiper.isHorizontal() ? -25 : 0) * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        tX = `calc(${tX}px ${rtl ? "-" : "+"} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      if (params.slideShadows) {
        let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
        if (!shadowEl) {
          shadowEl = createShadow("cards", slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformElements
    });
  };
  effectInit({
    effect: "cards",
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      _loopSwapReset: false,
      watchSlidesProgress: true,
      loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
      centeredSlides: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

// src/app/features/home-list/home/home.component.ts
Swiper.use([EffectCards, Mousewheel]);
var HomeComponent = class _HomeComponent {
  DataService;
  router;
  routes = routes;
  isSelected = [false];
  constructor(DataService2, router) {
    this.DataService = DataService2;
    this.router = router;
  }
  //   config: SwiperOptions = {
  //     effect: 'cards',
  //     loop: false,
  //     grabCursor: true,
  //     slidesPerView: 'auto',
  //   };
  bannercard = [
    {
      img: "course-22.jpg",
      img1: "assets/img/icons/course-01.svg",
      img2: "user-50.jpg",
      name: "David Benitz",
      department: "Productivity",
      description: "The Complete Business and Management Course",
      rating: "5.0 (210 Reviews)",
      price: "$168",
      fav: 0
    },
    {
      img: "course-25.jpg",
      img1: "assets/img/featured-courses/Clip-path-group.svg",
      img2: "user-20.jpg",
      name: "Edith Dorsey",
      department: "Lifestyles",
      description: "Build Creative Arts & media Course Completed",
      rating: "4.9 (178 Reviews)",
      price: "$190",
      fav: 6
    },
    {
      img: "course-24.jpg",
      img1: "assets/img/featured-courses/react.svg",
      img2: "user-23.jpg",
      name: "Calvin Johnsen",
      department: "Development",
      description: "Learn & Create ReactJS Tech Fundamentals Apps",
      rating: "5.0 (154 Reviews)",
      price: "$147",
      fav: 7
    }
  ];
  slideConfig = {
    lazyLoad: "ondemand",
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3e3,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  topCourseSlider = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  featureCourseSlider2 = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  brandSlide = {
    dots: false,
    infinite: true,
    speed: 2e3,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  instructorSlider = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScrol: 1
        }
      }
    ]
  };
  testimonialSlider = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  settings = {
    counter: false,
    plugins: [lg_zoom_es5_default, lg_video_es5_default]
  };
  lightGallery;
  needRefresh = false;
  ngAfterViewChecked() {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail) => {
    this.lightGallery = detail.instance;
  };
  ngOnInit() {
    AOS.init({ duration: 1200, once: true });
  }
  toggleClass(slide) {
    slide.active = !slide.active;
  }
  directPath() {
    this.router.navigate(["/pages/course/course-list"]);
  }
  iconSelect(index) {
    this.isSelected[index] = !this.isSelected[index];
  }
  onSubmit() {
    this.router.navigate([routes.courseList]);
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 320, vars: 13, consts: [["slickModal", "slick-carousel"], [1, "banner-section"], [1, "container", 2, "margin-left", "50px", "margin-top", "10px"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-xl-7", "col-lg-7"], [1, "banner-content", "pe-xxl-5", 2, "margin-left", "-15px !important"], [1, "hero-title"], [1, "mb-4", "text-white"], [1, "fs-lg", "text-center", "text-md-start", "pb-2", "pb-md-3", "mb-4"], [1, "banner-search", 3, "ngSubmit"], [1, "dropdown"], ["href", "javascript:void(0);", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "hero-dropdown"], [1, "isax", "isax-arrow-down5", "fs-12"], [1, "dropdown-menu", "p-1"], ["href", "javascript:void(0);", 1, "dropdown-item"], ["type", "text", "name", "search", "placeholder", "Rechercher des formations, des formateurs...", 1, "border-0", "form-control", "p-0"], ["type", "submit", 1, "btn", "btn-secondary", "ms-auto"], [1, "isax", "isax-arrow-right-1"], [1, "benefit-section"], [1, "container"], [1, "section-header", "text-center"], [1, "fw-medium", "text-secondary", "text-decoration-underline", "mb-2", "d-inline-block"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "card", "shadow-sm"], [1, "card-body", "p-4"], [1, "position-absolute", "top-0", "end-0", "mt-n3", "me-n4"], ["src", "./assets/img/shapes/bg-1.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-primary-transparent", "d-inline-flex"], [1, "isax", "isax-book-1", "fs-24"], [1, "mt-3", "mb-1"], ["src", "assets/img/shapes/bg-2.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-secondary-transparent", "d-inline-flex"], [1, "isax", "isax-bookmark5", "fs-24"], ["src", "assets/img/shapes/bg-3.png", "alt", "img"], [1, "p-4", "rounded-pill", "bg-skyblue-transparent", "d-inline-flex"], [1, "isax", "isax-chart-26", "fs-24"], [1, "isax", "isax-clock-1", "fs-24"], [1, "client-section"], [1, "fw-medium", "text-center", "mb-4"], [1, "text-decoration-underline", "text-secondary"], [1, "institutions-slider", "lazy", "slider"], [3, "config"], ["ngxSlickItem", "", 1, "institutions-items", "p-1"], ["src", "./assets/img/client/01.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/02.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/03.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/04.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/05.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/06.svg", "alt", "img", 1, "img-fluid"], ["src", "./assets/img/client/07.svg", "alt", "img", 1, "img-fluid"], [1, "top-courses-sec"], ["src", "./assets/img/bg/bg-20.png", "alt", "img", 1, "top-courses-bg"], [1, "top-courses-slider", "lazy"], ["ngxSlickItem", ""], [1, "categories-item", "categories-item-three", "mb-0"], ["src", "assets/img/category/icons/icon-6.svg", "alt", "img", 1, "mx-auto"], [1, "title"], [3, "routerLink"], ["src", "assets/img/category/icons/icon-7.svg", "alt", "img", 1, "mx-auto"], ["src", "assets/img/category/icons/icon-8.svg", "alt", "img", 1, "mx-auto"], ["src", "assets/img/category/icons/icon-9.svg", "alt", "img", 1, "mx-auto"], ["src", "assets/img/category/icons/icon-10.svg", "alt", "img", 1, "mx-auto"], ["src", "assets/img/category/icons/icon-11.svg", "alt", "img", 1, "mx-auto"], [1, "btn", "btn-primary", "btn-md", 3, "routerLink"], [1, "trust-sec"], [1, "video-showcase"], ["src", "assets/img/feature/feature-1.jpg", "alt", "banner", 1, "img-fluid", "w-100", "rounded-2"], [1, "video-play"], ["size", "1400-933", 3, "settings", "onInit"], ["src", "https://www.youtube.com/embed/1trvO6dqQUI"], [1, "isax", "isax-play5"], [1, "trust-content"], ["src", "./assets/img/bg/bg-19.png", "alt", "img", 1, "w-100", "trust-bg"], [1, "row", "justify-content-between"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "flex-wrap", "mt-5", "gap-2"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-dark", 3, "routerLink"], [1, "col-md-7"], [1, "col-md-6"], [1, "text-white", "mb-2"], [1, "text-white", "mb-5"], [1, "d-flex", "align-items-center", "bg-white", "user-goal", "p-2"], [1, "avatar", "avatar-lg", "flex-shrink-0"], ["src", "./assets/img/user/user-28.jpg", "alt", "img", 1, "rounded-pill"], [1, "text-gray-9", "mb-0"], [1, "how-it-works-sec-two"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "fade-up", 1, "me-5"], ["src", "assets/img/feature/how-it-work.jpg", "alt", "img", 1, "img-fluid", "rounded-5"], ["data-aos", "fade-up", 1, "how-it-works-content", "aos"], [1, "section-header"], [1, "mb-1"], [1, "d-flex", "align-items-center", "works-items"], [1, "count"], [1, "about-section-two", "pb-0"], [1, "p-3", "p-sm-4", "position-relative"], [1, "position-absolute", "top-0", "start-0", "z-n1"], ["src", "assets/img/shapes/shape-1.svg", "alt", "img"], [1, "position-absolute", "bottom-0", "end-0", "z-n1"], [1, "position-absolute", "bottom-0", "start-0", "mb-md-5", "ms-md-n5"], ["src", "assets/img/icons/icon-1.svg", "alt", "img"], ["src", "./assets/img/about/about-2.svg", "alt", "img", 1, "img-fluid", "img-radius"], [1, "ps-0", "ps-lg-2", "pt-4", "pt-lg-0", "ps-xl-5"], [1, "d-flex", "align-items-center", "about-us-banner"], [1, "bg-primary-transparent", "rounded-3", "p-2", "about-icon", "d-flex", "justify-content-center", "align-items-center"], [1, "ps-3"], [1, "mb-2"], [1, "bg-secondary-transparent", "rounded-3", "p-2", "about-icon", "d-flex", "justify-content-center", "align-items-center"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6);
      \u0275\u0275text(6, "avec Pyramide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 7);
      \u0275\u0275text(8, " Formez vos talents ");
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "Transformez");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " votre ");
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "entreprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 8);
      \u0275\u0275text(15, " D\xE9veloppez les comp\xE9tences qui font avancer votre entreprise ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "form", 9);
      \u0275\u0275listener("ngSubmit", function HomeComponent_Template_form_ngSubmit_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSubmit());
      });
      \u0275\u0275elementStart(17, "div", 10)(18, "a", 11);
      \u0275\u0275text(19, " S\xE9lectionner une Cat\xE9gorie ");
      \u0275\u0275element(20, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "ul", 13)(22, "li")(23, "a", 14);
      \u0275\u0275text(24, "Management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li")(26, "a", 14);
      \u0275\u0275text(27, "D\xE9veloppement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "li")(29, "a", 14);
      \u0275\u0275text(30, "Marketing Digital");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "li")(32, "a", 14);
      \u0275\u0275text(33, "Finance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "li")(35, "a", 14);
      \u0275\u0275text(36, "Ressources Humaines");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(37, "input", 15);
      \u0275\u0275elementStart(38, "button", 16);
      \u0275\u0275element(39, "i", 17);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(40, "section", 18)(41, "div", 19)(42, "div", 20)(43, "span", 21);
      \u0275\u0275text(44, "Nos Avantages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h2");
      \u0275\u0275text(46, "Suivez la progression et les performances par employ\xE9, service ou entreprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, " La bonne formation, guid\xE9e par un expert, peut vous fournir des connaissances inestimables et des comp\xE9tences pratiques pour r\xE9ussir. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 22)(50, "div", 23)(51, "div", 24)(52, "div", 25)(53, "div", 26);
      \u0275\u0275element(54, "img", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 28);
      \u0275\u0275element(56, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "h5", 30);
      \u0275\u0275text(58, "\u{1F7E2} Flexibilit\xE9 & Organisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p");
      \u0275\u0275text(60, " Cr\xE9ez des sessions adapt\xE9es \xE0 vos besoins m\xE9tier Formations en pr\xE9sentiel, e-learning ou hybrides Affectation simple des employ\xE9s aux session Un syst\xE8me flexible qui s\u2019adapte \xE0 votre organisation ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "div", 23)(62, "div", 24)(63, "div", 25)(64, "div", 26);
      \u0275\u0275element(65, "img", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 32);
      \u0275\u0275element(67, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "h5", 30);
      \u0275\u0275text(69, "\u{1F7E0} Formateurs & Consultants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p");
      \u0275\u0275text(71, " Collaborez facilement avec des formateurs internes ou externes Un m\xEAme formateur peut intervenir dans plusieurs entreprises Gestion claire des sessions, participants et \xE9valuations Un espace d\xE9di\xE9 pour les formateurs ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "div", 23)(73, "div", 24)(74, "div", 25)(75, "div", 26);
      \u0275\u0275element(76, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 35);
      \u0275\u0275element(78, "i", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "h5", 30);
      \u0275\u0275text(80, "\u{1F7E3} Exp\xE9rience Employ\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82, " Une interface simple et intuitive pour vos collaborateurs Acc\xE8s rapide aux formations et aux certificats Inscription facile et suivi personnalis\xE9 Valorisez les comp\xE9tences acquises ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(83, "div", 23)(84, "div", 24)(85, "div", 25)(86, "div", 26);
      \u0275\u0275element(87, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 28);
      \u0275\u0275element(89, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "h5", 30);
      \u0275\u0275text(91, "\u{1F534} Certification & Tra\xE7abilit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p");
      \u0275\u0275text(93, " Certificats s\xE9curis\xE9s et v\xE9rifiables Historique complet des formations suivies Tra\xE7abilit\xE9 conforme aux exigences r\xE9glementaires Gestion des certificats avec dates d\u2019expiration ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "div", 23)(95, "div", 24)(96, "div", 25)(97, "div", 26);
      \u0275\u0275element(98, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 32);
      \u0275\u0275element(100, "i", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "h5", 30);
      \u0275\u0275text(102, "\u{1F7E1} S\xE9curit\xE9 & Fiabilit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p");
      \u0275\u0275text(104, " Donn\xE9es s\xE9curis\xE9es et cloisonn\xE9es par entreprise Gestion fine des r\xF4les et des permissions Respect des bonnes pratiques de s\xE9curit\xE9 Plateforme fiable et \xE9volutive ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(105, "div", 23)(106, "div", 24)(107, "div", 25)(108, "div", 26);
      \u0275\u0275element(109, "img", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 35);
      \u0275\u0275element(111, "i", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "h5", 30);
      \u0275\u0275text(113, "\u26A1 Gain de temps & Performance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p");
      \u0275\u0275text(115, " R\xE9duisez la charge administrative des RH Automatisez les inscriptions et la g\xE9n\xE9ration des certificats Acc\xE9l\xE9rez la mont\xE9e en comp\xE9tences de vos \xE9quipes Concentrez-vous sur l\u2019essentiel : la performance ");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(116, "section", 38)(117, "div", 19)(118, "h6", 39);
      \u0275\u0275text(119, " Approuv\xE9 par ");
      \u0275\u0275elementStart(120, "span", 40);
      \u0275\u0275text(121, "200+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(122, " Entreprises \xE0 Travers l'Afrique ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 41)(124, "ngx-slick-carousel", 42, 0)(126, "div", 43);
      \u0275\u0275element(127, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 43);
      \u0275\u0275element(129, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "div", 43);
      \u0275\u0275element(131, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "div", 43);
      \u0275\u0275element(133, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "div", 43);
      \u0275\u0275element(135, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 43);
      \u0275\u0275element(137, "img", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "div", 43);
      \u0275\u0275element(139, "img", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 43);
      \u0275\u0275element(141, "img", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 43);
      \u0275\u0275element(143, "img", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 43);
      \u0275\u0275element(145, "img", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 43);
      \u0275\u0275element(147, "img", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 43);
      \u0275\u0275element(149, "img", 49);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(150, "section", 51);
      \u0275\u0275element(151, "img", 52);
      \u0275\u0275elementStart(152, "div", 19)(153, "div", 20)(154, "span", 21);
      \u0275\u0275text(155, "Nos Cat\xE9gories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "h2");
      \u0275\u0275text(157, "Formations & Cat\xE9gories ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "p");
      \u0275\u0275text(159, " Cat\xE9goriser vos formations pour une navigation facile et une meilleure organisation. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 53)(161, "ngx-slick-carousel", 42, 0)(163, "div", 54)(164, "div", 55);
      \u0275\u0275element(165, "img", 56);
      \u0275\u0275elementStart(166, "h6", 57)(167, "a", 58);
      \u0275\u0275text(168, "Management");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(169, "div", 54)(170, "div", 55);
      \u0275\u0275element(171, "img", 59);
      \u0275\u0275elementStart(172, "h6", 57)(173, "a", 58);
      \u0275\u0275text(174, "Ressources Humaines");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(175, "div", 54)(176, "div", 55);
      \u0275\u0275element(177, "img", 60);
      \u0275\u0275elementStart(178, "h6", 57)(179, "a", 58);
      \u0275\u0275text(180, "Marketing Digital");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(181, "div", 54)(182, "div", 55);
      \u0275\u0275element(183, "img", 61);
      \u0275\u0275elementStart(184, "h6", 57)(185, "a", 58);
      \u0275\u0275text(186, "Finance & Comptabilit\xE9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(187, "div", 54)(188, "div", 55);
      \u0275\u0275element(189, "img", 62);
      \u0275\u0275elementStart(190, "h6", 57)(191, "a", 58);
      \u0275\u0275text(192, "Leadership");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(193, "div", 54)(194, "div", 55);
      \u0275\u0275element(195, "img", 63);
      \u0275\u0275elementStart(196, "h6", 57)(197, "a", 58);
      \u0275\u0275text(198, "D\xE9veloppement Web");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(199, "a", 64);
      \u0275\u0275text(200, "Voir Toutes les Cat\xE9gories");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(201, "section", 65)(202, "div", 19)(203, "div", 66);
      \u0275\u0275element(204, "img", 67);
      \u0275\u0275elementStart(205, "div", 68)(206, "lightgallery", 69)(207, "a", 70);
      \u0275\u0275element(208, "i", 71);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(209, "div", 72);
      \u0275\u0275element(210, "img", 73);
      \u0275\u0275elementStart(211, "div", 74)(212, "div", 75)(213, "h4");
      \u0275\u0275text(214, " Approuv\xE9 par 5.000+ entreprises et apprenants satisfaits depuis 2020 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "div", 76)(216, "a", 77);
      \u0275\u0275text(217, "S'inscrire comme Apprenant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "a", 78);
      \u0275\u0275text(219, "Devenir Formateur");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(220, "div", 79)(221, "div", 22)(222, "div", 80)(223, "h4", 81);
      \u0275\u0275text(224, "4.9/5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "h5", 81);
      \u0275\u0275text(226, "Note de Satisfaction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p", 82);
      \u0275\u0275text(228, " Un taux de satisfaction exceptionnel qui t\xE9moigne de la qualit\xE9 de nos formations. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "div", 80)(230, "h4", 81);
      \u0275\u0275text(231, "5000+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "h5", 81);
      \u0275\u0275text(233, "Apprenants Satisfaits en Afrique");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "p", 82);
      \u0275\u0275text(235, " Des milliers de professionnels africains ont transform\xE9 leur carri\xE8re gr\xE2ce \xE0 Pyramide. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(236, "div", 83)(237, "div", 84);
      \u0275\u0275element(238, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "p", 86);
      \u0275\u0275text(240, ' "Toutes les formations sont incroyablement utiles pour atteindre vos objectifs professionnels" ');
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(241, "div", 87)(242, "div", 19)(243, "div", 88)(244, "div", 89)(245, "div", 90);
      \u0275\u0275element(246, "img", 91);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(247, "div", 89)(248, "div", 92)(249, "div", 93)(250, "span", 21);
      \u0275\u0275text(251, "Comment \xE7a marche");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "h2", 94);
      \u0275\u0275text(253, "Comment \xE7a marche ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "p");
      \u0275\u0275text(255, " D\xE9ployez la formation en entreprise en toute simplicit\xE9 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(256, "div", 95)(257, "span", 96);
      \u0275\u0275text(258, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div")(260, "h5", 94);
      \u0275\u0275text(261, "Cr\xE9ez vos sessions de formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "p");
      \u0275\u0275text(263, " Une fois sur la page d'accueil du site, recherchez le bouton S'inscrire, Enregistrer ou Cr\xE9er un compte. Register, or Create Account button. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(264, "div", 95)(265, "span", 96);
      \u0275\u0275text(266, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "div")(268, "h5", 94);
      \u0275\u0275text(269, "Affectez vos collaborateurs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "p");
      \u0275\u0275text(271, " After verifying your email, you may be asked to complete additional profile information. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(272, "div", 95)(273, "span", 96);
      \u0275\u0275text(274, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "div")(276, "h5", 94);
      \u0275\u0275text(277, "Suivez la progression et certifiez les comp\xE9tences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "p");
      \u0275\u0275text(279, " Depending on the website, after registration, you might be able to browse and choose courses or programs to enroll in. ");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(280, "section", 97)(281, "div", 19)(282, "div", 88)(283, "div", 89)(284, "div", 98)(285, "div", 99);
      \u0275\u0275element(286, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "div", 101);
      \u0275\u0275element(288, "img", 100);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "div", 102);
      \u0275\u0275element(290, "img", 103);
      \u0275\u0275elementEnd();
      \u0275\u0275element(291, "img", 104);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(292, "div", 89)(293, "div", 105)(294, "div", 93)(295, "span", 21);
      \u0275\u0275text(296, "A propos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "h2");
      \u0275\u0275text(298, "A propos de nous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "p");
      \u0275\u0275text(300, "Nous accompagnons les entreprises dans la structuration, le suivi et la certification des formations professionnelles gr\xE2ce \xE0 une plateforme digitale pens\xE9e pour les enjeux RH.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(301, "div", 106)(302, "div")(303, "span", 107);
      \u0275\u0275element(304, "i", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "div", 108)(306, "h6", 109);
      \u0275\u0275text(307, "Apprenez de n'importe o\xF9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "p");
      \u0275\u0275text(309, "L'apprentissage de n'importe o\xF9 est devenu un aspect transformateur de l'\xE9ducation moderne, permettant aux individus.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(310, "div", 106)(311, "div")(312, "span", 110);
      \u0275\u0275element(313, "i", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(314, "div", 108)(315, "h6", 109);
      \u0275\u0275text(316, "Mentors Experts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "p");
      \u0275\u0275text(318, "Les mentors experts sont des atouts inestimables dans tout domaine, fournissant des conseils et des connaissances exp\xE9riment\xE9es.");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275element(319, "app-footer");
    }
    if (rf & 2) {
      \u0275\u0275advance(124);
      \u0275\u0275property("config", ctx.slideConfig);
      \u0275\u0275advance(37);
      \u0275\u0275property("config", ctx.topCourseSlider);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(6);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.courseCategory);
      \u0275\u0275advance(7);
      \u0275\u0275property("settings", ctx.settings)("onInit", ctx.onInit);
      \u0275\u0275advance(10);
      \u0275\u0275property("routerLink", ctx.routes.login);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", ctx.routes.becomeAnExpert);
    }
  }, dependencies: [CommonModule, FooterComponent, RouterLink, SlickCarouselModule, SlickCarouselComponent, SlickItemDirective, LightgalleryModule, LightgalleryComponent], styles: ['/* src/app/features/home-list/home/home.component.scss */\n.banner-section {\n  background: url("./media/home-bg-white.png") no-repeat center center fixed;\n  padding: auto;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.banner-section {\n  position: relative;\n  background-color: #006F78 !important;\n  padding: 323px 0 80px;\n  z-index: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=home.component.css.map */\n'], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [CommonModule, FooterComponent, RouterLink, SlickCarouselModule, LightgalleryModule], encapsulation: ViewEncapsulation.None, template: `<!-- banner -->\r
<section class="banner-section">\r
  <!-- <img class="img-fluid d-none d-lg-flex banner-bg1" src="assets/img/bg/bg-15.png" alt="img" /> -->\r
  <!-- <img class="img-fluid d-none d-lg-flex banner-bg2" src="assets/img/bg/bg-16.png" alt="img" /> -->\r
  <!-- <img class="img-fluid d-none d-lg-flex banner-bg3" src="assets/img/bg/bg-17.png" alt="img" /> -->\r
  <!-- <img class="img-fluid d-none d-lg-flex banner-bg4" src="assets/img/bg/bg-18.png" alt="img" /> -->\r
  <div class="container" style="margin-left: 50px;margin-top:10px;">\r
    <div class="row align-items-center justify-content-between">\r
      <div class="col-xl-7 col-lg-7">\r
        <div class="banner-content pe-xxl-5" style="margin-left: -15px !important;">\r
          <span class="hero-title">avec Pyramide</span>\r
          <h1 class="mb-4 text-white"> Formez vos talents\r
             <span>Transformez</span> votre \r
            <span>entreprise</span> \r
          </h1>\r
          <p class="fs-lg text-center text-md-start pb-2 pb-md-3 mb-4">\r
           D\xE9veloppez les comp\xE9tences qui font avancer votre entreprise\r
          </p>\r
          <form class="banner-search" (ngSubmit)="onSubmit()">\r
            <div class="dropdown">\r
              <a class="hero-dropdown" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">\r
                S\xE9lectionner une Cat\xE9gorie <i class="isax isax-arrow-down5 fs-12"></i>\r
              </a>\r
              <ul class="dropdown-menu p-1">\r
                <li><a class="dropdown-item" href="javascript:void(0);">Management</a></li>\r
                <li><a class="dropdown-item" href="javascript:void(0);">D\xE9veloppement</a></li>\r
                <li><a class="dropdown-item" href="javascript:void(0);">Marketing Digital</a></li>\r
                <li><a class="dropdown-item" href="javascript:void(0);">Finance</a></li>\r
                <li><a class="dropdown-item" href="javascript:void(0);">Ressources Humaines</a></li>\r
              </ul>\r
            </div>\r
            <input type="text" name="search" class="border-0 form-control p-0"\r
              placeholder="Rechercher des formations, des formateurs..." />\r
            <button type="submit" class="btn btn-secondary ms-auto">\r
              <i class="isax isax-arrow-right-1"></i>\r
            </button>\r
          </form>\r
          <!-- <div class="d-flex align-items-center gap-4 justify-content-lg-between justify-content-center flex-wrap">\r
            <div class="counter-item">\r
              <div class="counter-icon flex-shrink-0">\r
                <img src="assets/img/icons/icon-32.svg" alt="img" />\r
              </div>\r
              <div class="count-content">\r
                <h5 class="text-purple">\r
                  <span class="count-digit">500</span>+\r
                </h5>\r
                <p>Formations Disponibles</p>\r
              </div>\r
            </div>\r
            <div class="counter-item">\r
              <div class="counter-icon flex-shrink-0">\r
                <img src="assets/img/icons/icon-33.svg" alt="img" />\r
              </div>\r
              <div class="count-content">\r
                <h5 class="text-skyblue">\r
                  <span class="count-digit">200</span>+\r
                </h5>\r
                <p>Entreprises Partenaires</p>\r
              </div>\r
            </div>\r
            <div class="counter-item">\r
              <div class="counter-icon flex-shrink-0">\r
                <img src="assets/img/icons/icon-34.svg" alt="img" />\r
              </div>\r
              <div class="count-content">\r
                <h5 class="text-success">\r
                  <span class="count-digit">150</span>+\r
                </h5>\r
                <p>Formateurs Certifi\xE9s</p>\r
              </div>\r
            </div>\r
          </div> -->\r
        </div>\r
      </div>\r
      <!-- <div class="col-xl-4 col-lg-5">\r
        <div class="banner-image pe-0">\r
          <div class="swiper swiper-slider-banner w-auto">\r
            <div class="swiper-wrapper">\r
              <div class="swiper swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress" >\r
                <div class="swiper-wrapper">\r
                  <div class="swiper-slide ng-star-inserted swiper-slide-visible swiper-slide-active" style="z-index: 3; transform: translate3d(0px, 0px, 0px) rotateZ(0deg) scale(1);">\r
                    <div class="swiper-slide">\r
                      <div class="course-item-two course-item mb-0">\r
                        <div class="course-img">\r
                          <img src="assets/img/course/course-22.jpg" alt="img" class="img-fluid" />\r
                          <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                            <a href="javascript:void(0);" class="fav-icon" [ngClass]="{'selected':isSelected[1]}" (click)="iconSelect(1)">\r
                              <i class="isax isax-heart"></i>\r
                            </a>\r
                            <a href="javascript:void(0);" class="brand-icon ms-auto">\r
                              <img src="assets/img/icons/course-01.svg" alt="img" class="img-fluid" />\r
                            </a>\r
                          </div>\r
                        </div>\r
                        <div class="course-content">\r
                          <div class="d-flex justify-content-between mb-2">\r
                            <div class="d-flex align-items-center">\r
                              <a href="javascript:void(0);" class="avatar avatar-sm">\r
                                <img src="assets/img/user/user-50.jpg" alt="img"\r
                                  class="img-fluid avatar avatar-sm rounded-circle" />\r
                              </a>\r
                              <div class="ms-2">\r
                                <a href="javascript:void(0);" class="link-default fs-14">Amadou Diallo</a>\r
                              </div>\r
                            </div>\r
                            <span\r
                              class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium">\r
                              Management\r
                            </span>\r
                          </div>\r
                          <h6 class="mb-2">\r
                            <a [routerLink]="routes.courseDetails">Formation Compl\xE8te en Gestion d'Entreprise</a>\r
                          </h6>\r
                          <p class="d-flex align-items-center mb-3">\r
                            <i class="ti ti-star-filled text-warning me-2"></i>\r
                            4.8\r
                          </p>\r
                          <div class="d-flex align-items-center justify-content-between">\r
                            <h6 class="text-secondary fs-16 fw-semi-bold mb-0">\r
                             75.000 FCFA\r
                            </h6>\r
                            <a [routerLink]="routes.cart" class="btn btn-dark btn-sm d-inline-flex align-items-center">Ajouter<i\r
                                class="isax isax-arrow-right-3 ms-1"></i></a>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="swiper-slide ng-star-inserted swiper-slide-visible swiper-slide-next" style="z-index: 2; transform: translate3d(calc(7.25032% - 321px), 0px, -100.005px) rotateZ(2.0001deg) scale(1);">\r
                    <div class="swiper-slide">\r
                      <div class="course-item-two course-item mb-0">\r
                        <div class="course-img">\r
                          <img src="assets/img/course/course-25.jpg" alt="img" class="img-fluid" />\r
                          <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                            <a href="javascript:void(0);" class="fav-icon" >\r
                              <i class="isax isax-heart"></i>\r
                            </a>\r
                            <a href="javascript:void(0);" class="brand-icon ms-auto">\r
                              <img src="assets/img/icons/course-01.svg" alt="img" class="img-fluid" />\r
                            </a>\r
                          </div>\r
                        </div>\r
                        <div class="course-content">\r
                          <div class="d-flex justify-content-between mb-2">\r
                            <div class="d-flex align-items-center">\r
                              <a href="javascript:void(0);" class="avatar avatar-sm">\r
                                <img src="assets/img/user/user-50.jpg" alt="img"\r
                                  class="img-fluid avatar avatar-sm rounded-circle" />\r
                              </a>\r
                              <div class="ms-2">\r
                                <a href="javascript:void(0);" class="link-default fs-14">Fatou Ndiaye</a>\r
                              </div>\r
                            </div>\r
                            <span\r
                              class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium">\r
                              Marketing\r
                            </span>\r
                          </div>\r
                          <h6 class="mb-2">\r
                            <a [routerLink]="routes.courseDetails">Marketing Digital pour Entreprises Africaines</a>\r
                          </h6>\r
                          <p class="d-flex align-items-center mb-3">\r
                            <i class="ti ti-star-filled text-warning me-2"></i>\r
                            4.9\r
                          </p>\r
                          <div class="d-flex align-items-center justify-content-between">\r
                            <h6 class="text-secondary fs-16 fw-semi-bold mb-0">\r
                             65.000 FCFA\r
                            </h6>\r
                            <a [routerLink]="routes.cart" class="btn btn-dark btn-sm d-inline-flex align-items-center">Ajouter<i\r
                                class="isax isax-arrow-right-3 ms-1"></i></a>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="swiper-slide " style="z-index: 1; transform: translate3d(calc(13.0005% - 642px), 0px, -200.01px) rotateZ(4.0002deg) scale(1); transition-duration: 0ms;">\r
                    <div class="swiper-slide">\r
                      <div class="course-item-two course-item mb-0">\r
                        <div class="course-img">\r
                          <img src="assets/img/course/course-23.jpg" alt="img" class="img-fluid" />\r
                          <div class="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">\r
                            <a href="javascript:void(0);" class="fav-icon" >\r
                              <i class="isax isax-heart"></i>\r
                            </a>\r
                            <a href="javascript:void(0);" class="brand-icon ms-auto">\r
                              <img src="assets/img/icons/course-01.svg" alt="img" class="img-fluid" />\r
                            </a>\r
                          </div>\r
                        </div>\r
                        <div class="course-content">\r
                          <div class="d-flex justify-content-between mb-2">\r
                            <div class="d-flex align-items-center">\r
                              <a href="javascript:void(0);" class="avatar avatar-sm">\r
                                <img src="assets/img/user/user-50.jpg" alt="img"\r
                                  class="img-fluid avatar avatar-sm rounded-circle" />\r
                              </a>\r
                              <div class="ms-2">\r
                                <a href="javascript:void(0);" class="link-default fs-14">Koffi Mensah</a>\r
                              </div>\r
                            </div>\r
                            <span\r
                              class="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium">\r
                              Finance\r
                            </span>\r
                          </div>\r
                          <h6 class="mb-2">\r
                            <a [routerLink]="routes.courseDetails">Gestion Financi\xE8re pour PME</a>\r
                          </h6>\r
                          <p class="d-flex align-items-center mb-3">\r
                            <i class="ti ti-star-filled text-warning me-2"></i>\r
                            4.7\r
                          </p>\r
                          <div class="d-flex align-items-center justify-content-between">\r
                            <h6 class="text-secondary fs-16 fw-semi-bold mb-0">\r
                             80.000 FCFA\r
                            </h6>\r
                            <a [routerLink]="routes.cart" class="btn btn-dark btn-sm d-inline-flex align-items-center">Ajouter<i\r
                                class="isax isax-arrow-right-3 ms-1"></i></a>\r
                          </div>\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
              </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div> -->\r
    </div>\r
  </div>\r
</section>\r
<!-- banner -->\r
\r
<!-- benefits -->\r
<section class="benefit-section">\r
  <div class="container">\r
    <div class="section-header text-center">\r
      <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Nos Avantages</span>\r
      <h2>Suivez la progression et les performances par employ\xE9, service ou entreprise</h2>\r
      <p>\r
        La bonne formation, guid\xE9e par un expert, peut vous fournir des connaissances inestimables \r
        et des comp\xE9tences pratiques pour r\xE9ussir.\r
      </p>\r
    </div>\r
    <div class="row">\r
      <div class="col-lg-4 col-md-6">\r
        <div class="card shadow-sm">\r
          <div class="card-body p-4">\r
            <div class="position-absolute top-0 end-0 mt-n3 me-n4">\r
              <img src="./assets/img/shapes/bg-1.png" alt="img" />\r
            </div>\r
            <div class="p-4 rounded-pill bg-primary-transparent d-inline-flex">\r
              <i class="isax isax-book-1 fs-24"></i>\r
            </div>\r
            <h5 class="mt-3 mb-1">\u{1F7E2} Flexibilit\xE9 & Organisation</h5>\r
            <p>\r
              Cr\xE9ez des sessions adapt\xE9es \xE0 vos besoins m\xE9tier\r
              Formations en pr\xE9sentiel, e-learning ou hybrides\r
              Affectation simple des employ\xE9s aux session\r
              Un syst\xE8me flexible qui s\u2019adapte \xE0 votre organisation\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-lg-4 col-md-6">\r
        <div class="card shadow-sm">\r
          <div class="card-body p-4">\r
            <div class="position-absolute top-0 end-0 mt-n3 me-n4">\r
              <img src="assets/img/shapes/bg-2.png" alt="img" />\r
            </div>\r
            <div class="p-4 rounded-pill bg-secondary-transparent d-inline-flex">\r
              <i class="isax isax-bookmark5 fs-24"></i>\r
            </div>\r
            <h5 class="mt-3 mb-1">\u{1F7E0} Formateurs & Consultants</h5>\r
            <p>\r
                Collaborez facilement avec des formateurs internes ou externes\r
                Un m\xEAme formateur peut intervenir dans plusieurs entreprises\r
                Gestion claire des sessions, participants et \xE9valuations\r
                Un espace d\xE9di\xE9 pour les formateurs\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="col-lg-4 col-md-6">\r
        <div class="card shadow-sm">\r
          <div class="card-body p-4">\r
            <div class="position-absolute top-0 end-0 mt-n3 me-n4">\r
              <img src="assets/img/shapes/bg-3.png" alt="img" />\r
            </div>\r
            <div class="p-4 rounded-pill bg-skyblue-transparent d-inline-flex">\r
              <i class="isax isax-chart-26 fs-24"></i>\r
            </div>\r
            <h5 class="mt-3 mb-1">\u{1F7E3} Exp\xE9rience Employ\xE9</h5>\r
            <p>\r
              Une interface simple et intuitive pour vos collaborateurs\r
              Acc\xE8s rapide aux formations et aux certificats\r
              Inscription facile et suivi personnalis\xE9\r
              Valorisez les comp\xE9tences acquises\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
       <div class="col-lg-4 col-md-6">\r
        <div class="card shadow-sm">\r
          <div class="card-body p-4">\r
            <div class="position-absolute top-0 end-0 mt-n3 me-n4">\r
              <img src="assets/img/shapes/bg-3.png" alt="img" />\r
            </div>\r
            <div class="p-4 rounded-pill bg-primary-transparent d-inline-flex">\r
              <i class="isax isax-book-1 fs-24"></i>\r
            </div>\r
            <h5 class="mt-3 mb-1">\u{1F534} Certification & Tra\xE7abilit\xE9</h5>\r
            <p>\r
              Certificats s\xE9curis\xE9s et v\xE9rifiables\r
              Historique complet des formations suivies\r
              Tra\xE7abilit\xE9 conforme aux exigences r\xE9glementaires\r
              Gestion des certificats avec dates d\u2019expiration\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
       <div class="col-lg-4 col-md-6">\r
        <div class="card shadow-sm">\r
          <div class="card-body p-4">\r
            <div class="position-absolute top-0 end-0 mt-n3 me-n4">\r
              <img src="assets/img/shapes/bg-3.png" alt="img" />\r
            </div>\r
            <div class="p-4 rounded-pill bg-secondary-transparent d-inline-flex">\r
              <i class="isax isax-bookmark5 fs-24"></i>\r
            </div>\r
            <h5 class="mt-3 mb-1">\u{1F7E1} S\xE9curit\xE9 & Fiabilit\xE9</h5>\r
            <p>\r
              Donn\xE9es s\xE9curis\xE9es et cloisonn\xE9es par entreprise\r
              Gestion fine des r\xF4les et des permissions\r
              Respect des bonnes pratiques de s\xE9curit\xE9\r
              Plateforme fiable et \xE9volutive\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
       <div class="col-lg-4 col-md-6">\r
        <div class="card shadow-sm">\r
          <div class="card-body p-4">\r
            <div class="position-absolute top-0 end-0 mt-n3 me-n4">\r
              <img src="assets/img/shapes/bg-3.png" alt="img" />\r
            </div>\r
            <div class="p-4 rounded-pill bg-skyblue-transparent d-inline-flex">\r
              <i class="isax isax-clock-1 fs-24"></i>\r
            </div>\r
            <h5 class="mt-3 mb-1">\u26A1 Gain de temps & Performance</h5>\r
            <p>\r
              R\xE9duisez la charge administrative des RH\r
              Automatisez les inscriptions et la g\xE9n\xE9ration des certificats\r
              Acc\xE9l\xE9rez la mont\xE9e en comp\xE9tences de vos \xE9quipes\r
              Concentrez-vous sur l\u2019essentiel : la performance\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<!-- benefits -->\r
\r
<!-- institutions -->\r
<section class="client-section">\r
  <div class="container">\r
    <h6 class="fw-medium text-center mb-4">\r
      Approuv\xE9 par\r
      <span class="text-decoration-underline text-secondary">200+</span>\r
      Entreprises \xE0 Travers l'Afrique\r
    </h6>\r
    <div class="institutions-slider lazy slider">\r
      <ngx-slick-carousel #slickModal="slick-carousel" [config]="slideConfig">\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/01.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/02.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/03.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/04.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/05.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/06.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/07.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/02.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/03.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/04.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/05.svg" alt="img" />\r
        </div>\r
        <div class="institutions-items p-1" ngxSlickItem>\r
          <img class="img-fluid" src="./assets/img/client/06.svg" alt="img" />\r
        </div>\r
      </ngx-slick-carousel>\r
    </div>\r
  </div>\r
</section>\r
<!-- institutions -->\r
\r
<!-- top courses -->\r
<section class="top-courses-sec">\r
  <img class="top-courses-bg" src="./assets/img/bg/bg-20.png" alt="img" />\r
  <div class="container">\r
    <div class="section-header text-center">\r
      <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Nos Cat\xE9gories</span>\r
      <h2>Formations & Cat\xE9gories </h2>\r
      <p>\r
       Cat\xE9goriser vos formations pour une navigation facile et une meilleure organisation.\r
      </p>\r
    </div>\r
    <div class="top-courses-slider lazy">\r
      <ngx-slick-carousel #slickModal="slick-carousel" [config]="topCourseSlider">\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-6.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Management</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-7.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Ressources Humaines</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-8.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Marketing Digital</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-9.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Finance & Comptabilit\xE9</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-10.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">Leadership</a>\r
            </h6>\r
          </div>\r
        </div>\r
        <div ngxSlickItem>\r
          <div class="categories-item categories-item-three mb-0">\r
            <img class="mx-auto" src="assets/img/category/icons/icon-11.svg" alt="img" />\r
            <h6 class="title">\r
              <a [routerLink]="routes.courseCategory">D\xE9veloppement Web</a>\r
            </h6>\r
          </div>\r
        </div>\r
      </ngx-slick-carousel>\r
    </div>\r
    <a [routerLink]="routes.courseCategory" class="btn btn-primary btn-md">Voir Toutes les Cat\xE9gories</a>\r
  </div>\r
</section>\r
<!-- /top courses -->\r
\r
<!-- trust -->\r
<section class="trust-sec">\r
  <div class="container">\r
    <div class="video-showcase">\r
      <img src="assets/img/feature/feature-1.jpg" class="img-fluid w-100 rounded-2" alt="banner" />\r
      <div class="video-play">\r
        <lightgallery [settings]="settings" [onInit]="onInit" size="1400-933">\r
          <a src="https://www.youtube.com/embed/1trvO6dqQUI"><i class="isax isax-play5"></i></a>\r
      </lightgallery>\r
      </div>\r
    </div>\r
    <div class="trust-content">\r
      <img src="./assets/img/bg/bg-19.png" alt="img" class="w-100 trust-bg" />\r
      <div class="row justify-content-between">\r
        <div class="col-md-4">\r
          <h4>\r
            Approuv\xE9 par 5.000+ entreprises et apprenants satisfaits depuis 2020\r
          </h4>\r
          <div class="d-flex align-items-center flex-wrap mt-5 gap-2">\r
            <a [routerLink]="routes.login" class="btn btn-secondary">S'inscrire comme Apprenant</a>\r
            <a [routerLink]="routes.becomeAnExpert" class="btn btn-dark">Devenir Formateur</a>\r
          </div>\r
        </div>\r
        <div class="col-md-7">\r
          <div class="row">\r
            <div class="col-md-6">\r
              <h4 class="text-white mb-2">4.9/5</h4>\r
              <h5 class="text-white mb-2">Note de Satisfaction</h5>\r
              <p class="text-white mb-5">\r
                Un taux de satisfaction exceptionnel qui t\xE9moigne de la qualit\xE9 de nos formations.\r
              </p>\r
            </div>\r
            <div class="col-md-6">\r
              <h4 class="text-white mb-2">5000+</h4>\r
              <h5 class="text-white mb-2">Apprenants Satisfaits en Afrique</h5>\r
              <p class="text-white mb-5">\r
                Des milliers de professionnels africains ont transform\xE9 leur carri\xE8re gr\xE2ce \xE0 Pyramide.\r
              </p>\r
            </div>\r
          </div>\r
          <div class="d-flex align-items-center bg-white user-goal p-2">\r
            <div class="avatar avatar-lg flex-shrink-0">\r
              <img class="rounded-pill" src="./assets/img/user/user-28.jpg" alt="img" />\r
            </div>\r
            <p class="text-gray-9 mb-0">\r
              "Toutes les formations sont incroyablement utiles pour atteindre vos objectifs professionnels"\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<!-- how it works -->\r
<div class="how-it-works-sec-two">\r
  <div class="container">\r
    <div class="row align-items-center">\r
      <div class="col-lg-6">\r
        <div class="me-5" data-aos="fade-up">\r
          <img src="assets/img/feature/how-it-work.jpg" class="img-fluid rounded-5" alt="img" />\r
        </div>\r
      </div>\r
      <div class="col-lg-6">\r
        <div class="how-it-works-content aos" data-aos="fade-up">\r
          <div class="section-header">\r
            <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Comment \xE7a marche</span>\r
            <h2 class="mb-1">Comment \xE7a marche ?</h2>\r
            <p>\r
              D\xE9ployez la formation en entreprise en toute simplicit\xE9\r
            </p>\r
          </div>\r
          <div class="d-flex align-items-center works-items">\r
            <span class="count">01</span>\r
            <div>\r
              <h5 class="mb-1">Cr\xE9ez vos sessions de formation</h5>\r
              <p>\r
                Une fois sur la page d'accueil du site, recherchez le bouton S'inscrire, Enregistrer ou Cr\xE9er un compte.\r
                Register, or Create Account button.\r
              </p>\r
            </div>\r
          </div>\r
          <div class="d-flex align-items-center works-items">\r
            <span class="count">02</span>\r
            <div>\r
              <h5 class="mb-1">Affectez vos collaborateurs</h5>\r
              <p>\r
                After verifying your email, you may be asked to complete\r
                additional profile information.\r
              </p>\r
            </div>\r
          </div>\r
          <div class="d-flex align-items-center works-items">\r
            <span class="count">03</span>\r
            <div>\r
              <h5 class="mb-1">Suivez la progression et certifiez les comp\xE9tences</h5>\r
              <p>\r
                Depending on the website, after registration, you might be able\r
                to browse and choose courses or programs to enroll in.\r
              </p>\r
            </div>\r
          </div>\r
          \r
          <!-- <div class="d-flex align-items-center works-items mb-0 pb-0 border-0">\r
            <span class="count">04</span>\r
            <div>\r
              <h5 class="mb-1">Access Your Account</h5>\r
              <p>\r
                Should have access to the website\u2019s features, such as enrolling\r
                in courses, materials, or tracking progress.\r
              </p>\r
            </div>\r
          </div> -->\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
<section class="about-section-two pb-0">\r
    <div class="container">\r
        <div class="row align-items-center">\r
            <div class="col-lg-6">\r
            <div class="p-3 p-sm-4 position-relative">\r
                <div class="position-absolute top-0 start-0 z-n1">\r
                    <img src="assets/img/shapes/shape-1.svg" alt="img">\r
                </div>\r
                <div class="position-absolute bottom-0 end-0 z-n1">\r
                    <img src="assets/img/shapes/shape-1.svg" alt="img">\r
                </div>\r
                <div class="position-absolute bottom-0 start-0 mb-md-5 ms-md-n5">\r
                    <img src="assets/img/icons/icon-1.svg" alt="img">\r
                </div>\r
                <img class="img-fluid img-radius" src="./assets/img/about/about-2.svg" alt="img">\r
            </div>\r
            </div>\r
            <div class="col-lg-6">\r
                <div class="ps-0 ps-lg-2 pt-4 pt-lg-0 ps-xl-5">\r
                    <div class="section-header">\r
                        <span class="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">A propos</span>\r
                        <h2>A propos de nous</h2>\r
                        <p>Nous accompagnons les entreprises dans la structuration, le suivi et la certification des formations professionnelles gr\xE2ce \xE0 une plateforme digitale pens\xE9e pour les enjeux RH.</p>\r
                    </div>\r
                    <div class="d-flex align-items-center about-us-banner">\r
                        <div>\r
                            <span class="bg-primary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center">\r
                                <i class="isax isax-book-1 fs-24"></i>\r
                            </span>\r
                        </div>\r
                        <div class="ps-3">\r
                            <h6 class="mb-2">Apprenez de n'importe o\xF9</h6>\r
                            <p>L'apprentissage de n'importe o\xF9 est devenu un aspect transformateur de l'\xE9ducation moderne, permettant aux individus.</p>\r
                        </div>\r
                    </div>\r
                    <div class="d-flex align-items-center about-us-banner">\r
                        <div>\r
                            <span class="bg-secondary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center">\r
                                <i class="isax isax-bookmark5 fs-24"></i>\r
                            </span>\r
                        </div>\r
                        <div class="ps-3">\r
                            <h6 class="mb-2">Mentors Experts</h6>\r
                            <p>Les mentors experts sont des atouts inestimables dans tout domaine, fournissant des conseils et des connaissances exp\xE9riment\xE9es.</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</section>\r
<!-- how it works -->\r
<!-- /trust -->\r
\r
<!-- Les autres sections continuent avec la m\xEAme traduction... -->\r
<!-- Je continue si vous le souhaitez -->\r
\r
  <app-footer></app-footer>`, styles: ['/* src/app/features/home-list/home/home.component.scss */\n.banner-section {\n  background: url("./media/home-bg-white.png") no-repeat center center fixed;\n  padding: auto;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.banner-section {\n  position: relative;\n  background-color: #006F78 !important;\n  padding: 323px 0 80px;\n  z-index: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [{ type: DataService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app/features/home-list/home/home.component.ts", lineNumber: 33 });
})();
export {
  HomeComponent
};
/*! Bundled license information:

lightgallery/plugins/zoom/lg-zoom.es5.js:
lightgallery/plugins/video/lg-video.es5.js:
  (*!
   * lightgallery | 2.8.3 | March 1st 2025
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=chunk-ETGJZPQS.js.map
