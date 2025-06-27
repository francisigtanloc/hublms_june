'use strict'
!(function (e, t) {
  typeof exports === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
    ? define(['jquery', 'googlemaps!'], t)
    : (e.GMaps = t())
})(this, function () {
  let t
  let o
  let n
  let i
  const r = function (e, t) {
    let o
    if (e === t) return e
    for (o in t) void 0 !== t[o] && (e[o] = t[o])
    return e
  }
  const s = function (e, t) {
    let o
    const n = Array.prototype.slice.call(arguments, 2)
    let i = []
    const r = e.length
    if (Array.prototype.map && e.map === Array.prototype.map)
      i = Array.prototype.map.call(e, function (e) {
        const o = n.slice(0)
        return o.splice(0, 0, e), t.apply(this, o)
      })
    else
      for (o = 0; o < r; o++)
        (callback_params = n),
          callback_params.splice(0, 0, e[o]),
          i.push(t.apply(this, callback_params))
    return i
  }
  const a = function (e) {
    let t
    let o = []
    for (t = 0; t < e.length; t++) o = o.concat(e[t])
    return o
  }
  const l = function (e, t) {
    let o, n, i, r, s
    for (o = 0; o < e.length; o++)
      e[o] instanceof google.maps.LatLng ||
        (e[o].length > 0 && typeof e[o][0] === 'object'
          ? (e[o] = l(e[o], t))
          : (e[o] =
              ((n = e[o]),
              (i = t),
              (r = void 0),
              (s = void 0),
              (r = n[0]),
              (s = n[1]),
              i && ((r = n[1]), (s = n[0])),
              new google.maps.LatLng(r, s))))
    return e
  }
  const p = function (e, t) {
    e = e.replace('#', '')
    return 'jQuery' in window && t
      ? $('#' + e, t)[0]
      : document.getElementById(e)
  }
  const c =
    ((t = document),
    (o = function (e) {
      if (typeof window.google !== 'object' || !window.google.maps)
        return (
          typeof window.console === 'object' &&
            window.console.error &&
            console.error(
              'Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.'
            ),
          function () {}
        )
      if (!this) return new o(e)
      ;(e.zoom = e.zoom || 15), (e.mapType = e.mapType || 'roadmap')
      let n
      const i = function (e, t) {
        return void 0 === e ? t : e
      }
      const s = this
      const a = [
        'bounds_changed',
        'center_changed',
        'click',
        'dblclick',
        'drag',
        'dragend',
        'dragstart',
        'idle',
        'maptypeid_changed',
        'projection_changed',
        'resize',
        'tilesloaded',
        'zoom_changed',
      ]
      const l = ['mousemove', 'mouseout', 'mouseover']
      const c = [
        'el',
        'lat',
        'lng',
        'mapType',
        'width',
        'height',
        'markerClusterer',
        'enableNewStyle',
      ]
      const g = e.el || e.div
      const h = e.markerClusterer
      const d = google.maps.MapTypeId[e.mapType.toUpperCase()]
      const u = new google.maps.LatLng(e.lat, e.lng)
      const m = i(e.zoomControl, !0)
      const f = e.zoomControlOpt || { style: 'DEFAULT', position: 'TOP_LEFT' }
      const y = f.style || 'DEFAULT'
      const v = f.position || 'TOP_LEFT'
      const w = i(e.panControl, !0)
      const k = i(e.mapTypeControl, !0)
      const L = i(e.scaleControl, !0)
      const b = i(e.streetViewControl, !0)
      var _ = i(_, !0)
      let M = {}
      let x = { zoom: this.zoom, center: u, mapTypeId: d }
      const C = {
        panControl: w,
        zoomControl: m,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle[y],
          position: google.maps.ControlPosition[v],
        },
        mapTypeControl: k,
        scaleControl: L,
        streetViewControl: b,
        overviewMapControl: _,
      }
      if (
        (typeof e.el === 'string' || typeof e.div === 'string'
          ? g.includes('#')
            ? (this.el = p(g, e.context))
            : (this.el = function (e, t) {
                const o = e.replace('.', '')
                return 'jQuery' in this && t
                  ? $('.' + o, t)[0]
                  : document.getElementsByClassName(o)[0]
              }.apply(this, [g, e.context]))
          : (this.el = g),
        void 0 === this.el || this.el === null)
      )
        throw 'No element defined.'
      for (
        window.context_menu = window.context_menu || {},
          window.context_menu[s.el.id] = {},
          this.controls = [],
          this.overlays = [],
          this.layers = [],
          this.singleLayers = {},
          this.markers = [],
          this.polylines = [],
          this.routes = [],
          this.polygons = [],
          this.infoWindow = null,
          this.overlay_el = null,
          this.zoom = e.zoom,
          this.registered_events = {},
          this.el.style.width =
            e.width || this.el.scrollWidth || this.el.offsetWidth,
          this.el.style.height =
            e.height || this.el.scrollHeight || this.el.offsetHeight,
          google.maps.visualRefresh = e.enableNewStyle,
          n = 0;
        n < c.length;
        n++
      )
        delete e[c[n]]
      for (
        e.disableDefaultUI != 1 && (x = r(x, C)), M = r(x, e), n = 0;
        n < a.length;
        n++
      )
        delete M[a[n]]
      for (n = 0; n < l.length; n++) delete M[l[n]]
      ;(this.map = new google.maps.Map(this.el, M)),
        h && (this.markerClusterer = h.apply(this, [this.map]))
      const O = function (e, t) {
        let o = ''
        const n = window.context_menu[s.el.id][e]
        for (var i in n)
          if (n.hasOwnProperty(i)) {
            const r = n[i]
            o +=
              '<li><a id="' +
              e +
              '_' +
              i +
              '" href="#">' +
              r.title +
              '</a></li>'
          }
        if (p('gmaps_context_menu')) {
          const a = p('gmaps_context_menu')
          a.innerHTML = o
          const l = a.getElementsByTagName('a')
          const c = l.length
          for (i = 0; i < c; i++) {
            const g = l[i]
            google.maps.event.clearListeners(g, 'click'),
              google.maps.event.addDomListenerOnce(
                g,
                'click',
                function (o) {
                  o.preventDefault(),
                    n[this.id.replace(e + '_', '')].action.apply(s, [t]),
                    s.hideContextMenu()
                },
                !1
              )
          }
          const h = function (e) {
            let t = 0
            let o = 0
            if (e.getBoundingClientRect) {
              const n = e.getBoundingClientRect()
              const i = -(window.scrollX ? window.scrollX : window.pageXOffset)
              const r = -(window.scrollY ? window.scrollY : window.pageYOffset)
              return [n.left - i, n.top - r]
            }
            if (e.offsetParent)
              do {
                ;(t += e.offsetLeft), (o += e.offsetTop)
              } while ((e = e.offsetParent))
            return [t, o]
          }.apply(this, [s.el])
          const d = h[0] + t.pixel.x - 15
          const u = h[1] + t.pixel.y - 15
          ;(a.style.left = d + 'px'), (a.style.top = u + 'px')
        }
      }
      ;(this.buildContextMenu = function (e, t) {
        if (e === 'marker') {
          t.pixel = {}
          const o = new google.maps.OverlayView()
          o.setMap(s.map),
            (o.draw = function () {
              const n = o.getProjection()
              const i = t.marker.getPosition()
              ;(t.pixel = n.fromLatLngToContainerPixel(i)), O(e, t)
            })
        } else O(e, t)
        const n = p('gmaps_context_menu')
        setTimeout(function () {
          n.style.display = 'block'
        }, 0)
      }),
        (this.setContextMenu = function (e) {
          window.context_menu[s.el.id][e.control] = {}
          let o
          const n = t.createElement('ul')
          for (o in e.options)
            if (e.options.hasOwnProperty(o)) {
              const i = e.options[o]
              window.context_menu[s.el.id][e.control][i.name] = {
                title: i.title,
                action: i.action,
              }
            }
          ;(n.id = 'gmaps_context_menu'),
            (n.style.display = 'none'),
            (n.style.position = 'absolute'),
            (n.style.minWidth = '100px'),
            (n.style.background = 'white'),
            (n.style.listStyle = 'none'),
            (n.style.padding = '8px'),
            (n.style.boxShadow = '2px 2px 6px #ccc'),
            p('gmaps_context_menu') || t.body.appendChild(n)
          const r = p('gmaps_context_menu')
          google.maps.event.addDomListener(
            r,
            'mouseout',
            function (e) {
              ;(e.relatedTarget && this.contains(e.relatedTarget)) ||
                window.setTimeout(function () {
                  r.style.display = 'none'
                }, 400)
            },
            !1
          )
        }),
        (this.hideContextMenu = function () {
          const e = p('gmaps_context_menu')
          e && (e.style.display = 'none')
        })
      const P = function (t, o) {
        google.maps.event.addListener(t, o, function (t) {
          void 0 == t && (t = this), e[o].apply(this, [t]), s.hideContextMenu()
        })
      }
      google.maps.event.addListener(
        this.map,
        'zoom_changed',
        this.hideContextMenu
      )
      for (var T = 0; T < a.length; T++) {
        ;(z = a[T]) in e && P(this.map, z)
      }
      for (T = 0; T < l.length; T++) {
        var z
        ;(z = l[T]) in e && P(this.map, z)
      }
      google.maps.event.addListener(this.map, 'rightclick', function (t) {
        e.rightclick && e.rightclick.apply(this, [t]),
          void 0 != window.context_menu[s.el.id].map &&
            s.buildContextMenu('map', t)
      }),
        (this.refresh = function () {
          google.maps.event.trigger(this.map, 'resize')
        }),
        (this.fitZoom = function () {
          let e
          const t = []
          const o = this.markers.length
          for (e = 0; e < o; e++)
            typeof this.markers[e].visible === 'boolean' &&
              this.markers[e].visible &&
              t.push(this.markers[e].getPosition())
          this.fitLatLngBounds(t)
        }),
        (this.fitLatLngBounds = function (e) {
          let t
          const o = e.length
          const n = new google.maps.LatLngBounds()
          for (t = 0; t < o; t++) n.extend(e[t])
          this.map.fitBounds(n)
        }),
        (this.setCenter = function (e, t, o) {
          this.map.panTo(new google.maps.LatLng(e, t)), o && o()
        }),
        (this.getElement = function () {
          return this.el
        }),
        (this.zoomIn = function (e) {
          ;(e = e || 1),
            (this.zoom = this.map.getZoom() + e),
            this.map.setZoom(this.zoom)
        }),
        (this.zoomOut = function (e) {
          ;(e = e || 1),
            (this.zoom = this.map.getZoom() - e),
            this.map.setZoom(this.zoom)
        })
      let S
      const W = []
      for (S in this.map)
        typeof this.map[S] !== 'function' || this[S] || W.push(S)
      for (n = 0; n < W.length; n++)
        !(function (e, t, o) {
          e[o] = function () {
            return t[o].apply(t, arguments)
          }
        })(this, this.map, W[n])
    }))
  return (
    (c.prototype.createControl = function (e) {
      const t = document.createElement('div')
      ;(t.style.cursor = 'pointer'),
        !0 !== e.disableDefaultStyles &&
          ((t.style.fontFamily = 'Roboto, Arial, sans-serif'),
          (t.style.fontSize = '11px'),
          (t.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px'))
      for (const o in e.style) t.style[o] = e.style[o]
      e.id && (t.id = e.id),
        e.title && (t.title = e.title),
        e.classes && (t.className = e.classes),
        e.content &&
          (typeof e.content === 'string'
            ? (t.innerHTML = e.content)
            : e.content instanceof HTMLElement && t.appendChild(e.content)),
        e.position &&
          (t.position = google.maps.ControlPosition[e.position.toUpperCase()])
      for (const n in e.events)
        !(function (t, o) {
          google.maps.event.addDomListener(t, o, function () {
            e.events[o].apply(this, [this])
          })
        })(t, n)
      return (t.index = 1), t
    }),
    (c.prototype.addControl = function (e) {
      const t = this.createControl(e)
      return this.controls.push(t), this.map.controls[t.position].push(t), t
    }),
    (c.prototype.removeControl = function (e) {
      let t
      let o = null
      for (t = 0; t < this.controls.length; t++)
        this.controls[t] == e &&
          ((o = this.controls[t].position), this.controls.splice(t, 1))
      if (o)
        for (t = 0; t < this.map.controls.length; t++) {
          const n = this.map.controls[e.position]
          if (n.getAt(t) == e) {
            n.removeAt(t)
            break
          }
        }
      return e
    }),
    (c.prototype.createMarker = function (e) {
      if (void 0 == e.lat && void 0 == e.lng && void 0 == e.position)
        throw 'No latitude or longitude defined.'
      const t = this
      const o = e.details
      const n = e.fences
      const i = e.outside
      const s = { position: new google.maps.LatLng(e.lat, e.lng), map: null }
      const a = r(s, e)
      delete a.lat, delete a.lng, delete a.fences, delete a.outside
      const l = new google.maps.Marker(a)
      if (((l.fences = n), e.infoWindow)) {
        l.infoWindow = new google.maps.InfoWindow(e.infoWindow)
        for (
          var p = [
              'closeclick',
              'content_changed',
              'domready',
              'position_changed',
              'zindex_changed',
            ],
            c = 0;
          c < p.length;
          c++
        )
          !(function (t, o) {
            e.infoWindow[o] &&
              google.maps.event.addListener(t, o, function (t) {
                e.infoWindow[o].apply(this, [t])
              })
          })(l.infoWindow, p[c])
      }
      const g = [
        'animation_changed',
        'clickable_changed',
        'cursor_changed',
        'draggable_changed',
        'flat_changed',
        'icon_changed',
        'position_changed',
        'shadow_changed',
        'shape_changed',
        'title_changed',
        'visible_changed',
        'zindex_changed',
      ]
      const h = [
        'dblclick',
        'drag',
        'dragend',
        'dragstart',
        'mousedown',
        'mouseout',
        'mouseover',
        'mouseup',
      ]
      for (c = 0; c < g.length; c++)
        !(function (t, o) {
          e[o] &&
            google.maps.event.addListener(t, o, function () {
              e[o].apply(this, [this])
            })
        })(l, g[c])
      for (c = 0; c < h.length; c++)
        !(function (t, o, n) {
          e[n] &&
            google.maps.event.addListener(o, n, function (o) {
              o.pixel ||
                (o.pixel = t.getProjection().fromLatLngToPoint(o.latLng)),
                e[n].apply(this, [o])
            })
        })(this.map, l, h[c])
      return (
        google.maps.event.addListener(l, 'click', function () {
          ;(this.details = o),
            e.click && e.click.apply(this, [this]),
            l.infoWindow && (t.hideInfoWindows(), l.infoWindow.open(t.map, l))
        }),
        google.maps.event.addListener(l, 'rightclick', function (o) {
          ;(o.marker = this),
            e.rightclick && e.rightclick.apply(this, [o]),
            void 0 != window.context_menu[t.el.id].marker &&
              t.buildContextMenu('marker', o)
        }),
        l.fences &&
          google.maps.event.addListener(l, 'dragend', function () {
            t.checkMarkerGeofence(l, function (e, t) {
              i(e, t)
            })
          }),
        l
      )
    }),
    (c.prototype.addMarker = function (e) {
      let t
      if (e.hasOwnProperty('gm_accessors_')) t = e
      else {
        if (
          !((e.hasOwnProperty('lat') && e.hasOwnProperty('lng')) || e.position)
        )
          throw 'No latitude or longitude defined.'
        t = this.createMarker(e)
      }
      return (
        t.setMap(this.map),
        this.markerClusterer && this.markerClusterer.addMarker(t),
        this.markers.push(t),
        c.fire('marker_added', t, this),
        t
      )
    }),
    (c.prototype.addMarkers = function (e) {
      for (var t, o = 0; (t = e[o]); o++) this.addMarker(t)
      return this.markers
    }),
    (c.prototype.hideInfoWindows = function () {
      for (var e, t = 0; (e = this.markers[t]); t++)
        e.infoWindow && e.infoWindow.close()
    }),
    (c.prototype.removeMarker = function (e) {
      for (let t = 0; t < this.markers.length; t++)
        if (this.markers[t] === e) {
          this.markers[t].setMap(null),
            this.markers.splice(t, 1),
            this.markerClusterer && this.markerClusterer.removeMarker(e),
            c.fire('marker_removed', e, this)
          break
        }
      return e
    }),
    (c.prototype.removeMarkers = function (e) {
      const t = []
      if (void 0 === e) {
        for (var o = 0; o < this.markers.length; o++) {
          ;(i = this.markers[o]).setMap(null), c.fire('marker_removed', i, this)
        }
        this.markerClusterer &&
          this.markerClusterer.clearMarkers &&
          this.markerClusterer.clearMarkers(),
          (this.markers = t)
      } else {
        for (o = 0; o < e.length; o++) {
          const n = this.markers.indexOf(e[o])
          if (n > -1)
            (i = this.markers[n]).setMap(null),
              this.markerClusterer && this.markerClusterer.removeMarker(i),
              c.fire('marker_removed', i, this)
        }
        for (o = 0; o < this.markers.length; o++) {
          var i
          ;(i = this.markers[o]).getMap() != null && t.push(i)
        }
        this.markers = t
      }
    }),
    (c.prototype.drawOverlay = function (e) {
      const t = new google.maps.OverlayView()
      let o = !0
      return (
        t.setMap(this.map),
        e.auto_show != null && (o = e.auto_show),
        (t.onAdd = function () {
          const o = document.createElement('div')
          ;(o.style.borderStyle = 'none'),
            (o.style.borderWidth = '0px'),
            (o.style.position = 'absolute'),
            (o.style.zIndex = 100),
            (o.innerHTML = e.content),
            (t.el = o),
            e.layer || (e.layer = 'overlayLayer')
          let n
          let i
          const r = this.getPanes()
          const s = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown']
          r[e.layer].appendChild(o)
          for (let a = 0; a < s.length; a++)
            (n = o),
              (i = s[a]),
              google.maps.event.addDomListener(n, i, function (e) {
                navigator.userAgent.toLowerCase().includes('msie') &&
                document.all
                  ? ((e.cancelBubble = !0), (e.returnValue = !1))
                  : e.stopPropagation()
              })
          e.click &&
            (r.overlayMouseTarget.appendChild(t.el),
            google.maps.event.addDomListener(t.el, 'click', function () {
              e.click.apply(t, [t])
            })),
            google.maps.event.trigger(this, 'ready')
        }),
        (t.draw = function () {
          const n = this.getProjection().fromLatLngToDivPixel(
            new google.maps.LatLng(e.lat, e.lng)
          )
          ;(e.horizontalOffset = e.horizontalOffset || 0),
            (e.verticalOffset = e.verticalOffset || 0)
          const i = t.el
          const r = i.children[0]
          const s = r.clientHeight
          const a = r.clientWidth
          switch (e.verticalAlign) {
            case 'top':
              i.style.top = n.y - s + e.verticalOffset + 'px'
              break
            default:
            case 'middle':
              i.style.top = n.y - s / 2 + e.verticalOffset + 'px'
              break
            case 'bottom':
              i.style.top = n.y + e.verticalOffset + 'px'
          }
          switch (e.horizontalAlign) {
            case 'left':
              i.style.left = n.x - a + e.horizontalOffset + 'px'
              break
            default:
            case 'center':
              i.style.left = n.x - a / 2 + e.horizontalOffset + 'px'
              break
            case 'right':
              i.style.left = n.x + e.horizontalOffset + 'px'
          }
          ;(i.style.display = o ? 'block' : 'none'),
            o || e.show.apply(this, [i])
        }),
        (t.onRemove = function () {
          const o = t.el
          e.remove
            ? e.remove.apply(this, [o])
            : (t.el.parentNode.removeChild(t.el), (t.el = null))
        }),
        this.overlays.push(t),
        t
      )
    }),
    (c.prototype.removeOverlay = function (e) {
      for (let t = 0; t < this.overlays.length; t++)
        if (this.overlays[t] === e) {
          this.overlays[t].setMap(null), this.overlays.splice(t, 1)
          break
        }
    }),
    (c.prototype.removeOverlays = function () {
      for (var e, t = 0; (e = this.overlays[t]); t++) e.setMap(null)
      this.overlays = []
    }),
    (c.prototype.drawPolyline = function (e) {
      let t = []
      const o = e.path
      if (o.length)
        if (void 0 === o[0][0]) t = o
        else
          for (var n, i = 0; (n = o[i]); i++)
            t.push(new google.maps.LatLng(n[0], n[1]))
      const r = {
        map: this.map,
        path: t,
        strokeColor: e.strokeColor,
        strokeOpacity: e.strokeOpacity,
        strokeWeight: e.strokeWeight,
        geodesic: e.geodesic,
        clickable: !0,
        editable: !1,
        visible: !0,
      }
      e.hasOwnProperty('clickable') && (r.clickable = e.clickable),
        e.hasOwnProperty('editable') && (r.editable = e.editable),
        e.hasOwnProperty('icons') && (r.icons = e.icons),
        e.hasOwnProperty('zIndex') && (r.zIndex = e.zIndex)
      for (
        var s = new google.maps.Polyline(r),
          a = [
            'click',
            'dblclick',
            'mousedown',
            'mousemove',
            'mouseout',
            'mouseover',
            'mouseup',
            'rightclick',
          ],
          l = 0;
        l < a.length;
        l++
      )
        !(function (t, o) {
          e[o] &&
            google.maps.event.addListener(t, o, function (t) {
              e[o].apply(this, [t])
            })
        })(s, a[l])
      return this.polylines.push(s), c.fire('polyline_added', s, this), s
    }),
    (c.prototype.removePolyline = function (e) {
      for (let t = 0; t < this.polylines.length; t++)
        if (this.polylines[t] === e) {
          this.polylines[t].setMap(null),
            this.polylines.splice(t, 1),
            c.fire('polyline_removed', e, this)
          break
        }
    }),
    (c.prototype.removePolylines = function () {
      for (var e, t = 0; (e = this.polylines[t]); t++) e.setMap(null)
      this.polylines = []
    }),
    (c.prototype.drawCircle = function (e) {
      delete (e = r(
        { map: this.map, center: new google.maps.LatLng(e.lat, e.lng) },
        e
      )).lat,
        delete e.lng
      for (
        var t = new google.maps.Circle(e),
          o = [
            'click',
            'dblclick',
            'mousedown',
            'mousemove',
            'mouseout',
            'mouseover',
            'mouseup',
            'rightclick',
          ],
          n = 0;
        n < o.length;
        n++
      )
        !(function (t, o) {
          e[o] &&
            google.maps.event.addListener(t, o, function (t) {
              e[o].apply(this, [t])
            })
        })(t, o[n])
      return this.polygons.push(t), t
    }),
    (c.prototype.drawRectangle = function (e) {
      e = r({ map: this.map }, e)
      const t = new google.maps.LatLngBounds(
        new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]),
        new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1])
      )
      e.bounds = t
      for (
        var o = new google.maps.Rectangle(e),
          n = [
            'click',
            'dblclick',
            'mousedown',
            'mousemove',
            'mouseout',
            'mouseover',
            'mouseup',
            'rightclick',
          ],
          i = 0;
        i < n.length;
        i++
      )
        !(function (t, o) {
          e[o] &&
            google.maps.event.addListener(t, o, function (t) {
              e[o].apply(this, [t])
            })
        })(o, n[i])
      return this.polygons.push(o), o
    }),
    (c.prototype.drawPolygon = function (e) {
      let t = !1
      e.hasOwnProperty('useGeoJSON') && (t = e.useGeoJSON),
        delete e.useGeoJSON,
        (e = r({ map: this.map }, e)),
        t == 0 && (e.paths = [e.paths.slice(0)]),
        e.paths.length > 0 &&
          e.paths[0].length > 0 &&
          (e.paths = a(s(e.paths, l, t)))
      for (
        var o = new google.maps.Polygon(e),
          n = [
            'click',
            'dblclick',
            'mousedown',
            'mousemove',
            'mouseout',
            'mouseover',
            'mouseup',
            'rightclick',
          ],
          i = 0;
        i < n.length;
        i++
      )
        !(function (t, o) {
          e[o] &&
            google.maps.event.addListener(t, o, function (t) {
              e[o].apply(this, [t])
            })
        })(o, n[i])
      return this.polygons.push(o), c.fire('polygon_added', o, this), o
    }),
    (c.prototype.removePolygon = function (e) {
      for (let t = 0; t < this.polygons.length; t++)
        if (this.polygons[t] === e) {
          this.polygons[t].setMap(null),
            this.polygons.splice(t, 1),
            c.fire('polygon_removed', e, this)
          break
        }
    }),
    (c.prototype.removePolygons = function () {
      for (var e, t = 0; (e = this.polygons[t]); t++) e.setMap(null)
      this.polygons = []
    }),
    (c.prototype.getFromFusionTables = function (e) {
      const t = e.events
      delete e.events
      const o = e
      const n = new google.maps.FusionTablesLayer(o)
      for (const i in t)
        !(function (e, o) {
          google.maps.event.addListener(e, o, function (e) {
            t[o].apply(this, [e])
          })
        })(n, i)
      return this.layers.push(n), n
    }),
    (c.prototype.loadFromFusionTables = function (e) {
      const t = this.getFromFusionTables(e)
      return t.setMap(this.map), t
    }),
    (c.prototype.getFromKML = function (e) {
      const t = e.url
      const o = e.events
      delete e.url, delete e.events
      const n = e
      const i = new google.maps.KmlLayer(t, n)
      for (const r in o)
        !(function (e, t) {
          google.maps.event.addListener(e, t, function (e) {
            o[t].apply(this, [e])
          })
        })(i, r)
      return this.layers.push(i), i
    }),
    (c.prototype.loadFromKML = function (e) {
      const t = this.getFromKML(e)
      return t.setMap(this.map), t
    }),
    (c.prototype.addLayer = function (e, t) {
      let o
      switch (((t = t || {}), e)) {
        case 'weather':
          this.singleLayers.weather = o = new google.maps.weather.WeatherLayer()
          break
        case 'clouds':
          this.singleLayers.clouds = o = new google.maps.weather.CloudLayer()
          break
        case 'traffic':
          this.singleLayers.traffic = o = new google.maps.TrafficLayer()
          break
        case 'transit':
          this.singleLayers.transit = o = new google.maps.TransitLayer()
          break
        case 'bicycling':
          this.singleLayers.bicycling = o = new google.maps.BicyclingLayer()
          break
        case 'panoramio':
          ;(this.singleLayers.panoramio = o =
            new google.maps.panoramio.PanoramioLayer()),
            o.setTag(t.filter),
            delete t.filter,
            t.click &&
              google.maps.event.addListener(o, 'click', function (e) {
                t.click(e), delete t.click
              })
          break
        case 'places':
          if (
            ((this.singleLayers.places = o =
              new google.maps.places.PlacesService(this.map)),
            t.search || t.nearbySearch || t.radarSearch)
          ) {
            const n = {
              bounds: t.bounds || null,
              keyword: t.keyword || null,
              location: t.location || null,
              name: t.name || null,
              radius: t.radius || null,
              rankBy: t.rankBy || null,
              types: t.types || null,
            }
            t.radarSearch && o.radarSearch(n, t.radarSearch),
              t.search && o.search(n, t.search),
              t.nearbySearch && o.nearbySearch(n, t.nearbySearch)
          }
          if (t.textSearch) {
            const i = {
              bounds: t.bounds || null,
              location: t.location || null,
              query: t.query || null,
              radius: t.radius || null,
            }
            o.textSearch(i, t.textSearch)
          }
      }
      if (void 0 !== o)
        return (
          typeof o.setOptions === 'function' && o.setOptions(t),
          typeof o.setMap === 'function' && o.setMap(this.map),
          o
        )
    }),
    (c.prototype.removeLayer = function (e) {
      if (typeof e === 'string' && void 0 !== this.singleLayers[e])
        this.singleLayers[e].setMap(null), delete this.singleLayers[e]
      else
        for (let t = 0; t < this.layers.length; t++)
          if (this.layers[t] === e) {
            this.layers[t].setMap(null), this.layers.splice(t, 1)
            break
          }
    }),
    (c.prototype.getRoutes = function (e) {
      switch (e.travelMode) {
        case 'bicycling':
          n = google.maps.TravelMode.BICYCLING
          break
        case 'transit':
          n = google.maps.TravelMode.TRANSIT
          break
        case 'driving':
          n = google.maps.TravelMode.DRIVING
          break
        default:
          n = google.maps.TravelMode.WALKING
      }
      i =
        e.unitSystem === 'imperial'
          ? google.maps.UnitSystem.IMPERIAL
          : google.maps.UnitSystem.METRIC
      const t = r(
        {
          avoidHighways: !1,
          avoidTolls: !1,
          optimizeWaypoints: !1,
          waypoints: [],
        },
        e
      )
      ;(t.origin = /string/.test(typeof e.origin)
        ? e.origin
        : new google.maps.LatLng(e.origin[0], e.origin[1])),
        (t.destination = /string/.test(typeof e.destination)
          ? e.destination
          : new google.maps.LatLng(e.destination[0], e.destination[1])),
        (t.travelMode = n),
        (t.unitSystem = i),
        delete t.callback,
        delete t.error
      const o = []
      new google.maps.DirectionsService().route(t, function (t, n) {
        if (n === google.maps.DirectionsStatus.OK) {
          for (const i in t.routes)
            t.routes.hasOwnProperty(i) && o.push(t.routes[i])
          e.callback && e.callback(o, t, n)
        } else e.error && e.error(t, n)
      })
    }),
    (c.prototype.removeRoutes = function () {
      this.routes.length = 0
    }),
    (c.prototype.getElevations = function (e) {
      ;(e = r({ locations: [], path: !1, samples: 256 }, e)).locations.length >
        0 &&
        e.locations[0].length > 0 &&
        (e.locations = a(s([e.locations], l, !1)))
      const t = e.callback
      delete e.callback
      const o = new google.maps.ElevationService()
      if (e.path) {
        const n = { path: e.locations, samples: e.samples }
        o.getElevationAlongPath(n, function (e, o) {
          t && typeof t === 'function' && t(e, o)
        })
      } else
        delete e.path,
          delete e.samples,
          o.getElevationForLocations(e, function (e, o) {
            t && typeof t === 'function' && t(e, o)
          })
    }),
    (c.prototype.cleanRoute = c.prototype.removePolylines),
    (c.prototype.renderRoute = function (e, t) {
      let o
      const n =
        typeof t.panel === 'string'
          ? document.getElementById(t.panel.replace('#', ''))
          : t.panel
      ;(t.panel = n),
        (t = r({ map: this.map }, t)),
        (o = new google.maps.DirectionsRenderer(t)),
        this.getRoutes({
          origin: e.origin,
          destination: e.destination,
          travelMode: e.travelMode,
          waypoints: e.waypoints,
          unitSystem: e.unitSystem,
          error: e.error,
          avoidHighways: e.avoidHighways,
          avoidTolls: e.avoidTolls,
          optimizeWaypoints: e.optimizeWaypoints,
          callback: function (e, t, n) {
            n === google.maps.DirectionsStatus.OK && o.setDirections(t)
          },
        })
    }),
    (c.prototype.drawRoute = function (e) {
      const t = this
      this.getRoutes({
        origin: e.origin,
        destination: e.destination,
        travelMode: e.travelMode,
        waypoints: e.waypoints,
        unitSystem: e.unitSystem,
        error: e.error,
        avoidHighways: e.avoidHighways,
        avoidTolls: e.avoidTolls,
        optimizeWaypoints: e.optimizeWaypoints,
        callback: function (o) {
          if (o.length > 0) {
            const n = {
              path: o[o.length - 1].overview_path,
              strokeColor: e.strokeColor,
              strokeOpacity: e.strokeOpacity,
              strokeWeight: e.strokeWeight,
            }
            e.hasOwnProperty('icons') && (n.icons = e.icons),
              t.drawPolyline(n),
              e.callback && e.callback(o[o.length - 1])
          }
        },
      })
    }),
    (c.prototype.travelRoute = function (e) {
      if (e.origin && e.destination)
        this.getRoutes({
          origin: e.origin,
          destination: e.destination,
          travelMode: e.travelMode,
          waypoints: e.waypoints,
          unitSystem: e.unitSystem,
          error: e.error,
          callback: function (t) {
            if (
              (t.length > 0 && e.start && e.start(t[t.length - 1]),
              t.length > 0 && e.step)
            ) {
              const o = t[t.length - 1]
              if (o.legs.length > 0)
                for (var n, i = o.legs[0].steps, r = 0; (n = i[r]); r++)
                  (n.step_number = r), e.step(n, o.legs[0].steps.length - 1)
            }
            t.length > 0 && e.end && e.end(t[t.length - 1])
          },
        })
      else if (e.route && e.route.legs.length > 0)
        for (var t, o = e.route.legs[0].steps, n = 0; (t = o[n]); n++)
          (t.step_number = n), e.step(t)
    }),
    (c.prototype.drawSteppedRoute = function (e) {
      const t = this
      if (e.origin && e.destination)
        this.getRoutes({
          origin: e.origin,
          destination: e.destination,
          travelMode: e.travelMode,
          waypoints: e.waypoints,
          error: e.error,
          callback: function (o) {
            if (
              (o.length > 0 && e.start && e.start(o[o.length - 1]),
              o.length > 0 && e.step)
            ) {
              const n = o[o.length - 1]
              if (n.legs.length > 0)
                for (var i, r = n.legs[0].steps, s = 0; (i = r[s]); s++) {
                  i.step_number = s
                  const a = {
                    path: i.path,
                    strokeColor: e.strokeColor,
                    strokeOpacity: e.strokeOpacity,
                    strokeWeight: e.strokeWeight,
                  }
                  e.hasOwnProperty('icons') && (a.icons = e.icons),
                    t.drawPolyline(a),
                    e.step(i, n.legs[0].steps.length - 1)
                }
            }
            o.length > 0 && e.end && e.end(o[o.length - 1])
          },
        })
      else if (e.route && e.route.legs.length > 0)
        for (var o, n = e.route.legs[0].steps, i = 0; (o = n[i]); i++) {
          o.step_number = i
          const r = {
            path: o.path,
            strokeColor: e.strokeColor,
            strokeOpacity: e.strokeOpacity,
            strokeWeight: e.strokeWeight,
          }
          e.hasOwnProperty('icons') && (r.icons = e.icons),
            t.drawPolyline(r),
            e.step(o)
        }
    }),
    (c.Route = function (e) {
      ;(this.origin = e.origin),
        (this.destination = e.destination),
        (this.waypoints = e.waypoints),
        (this.map = e.map),
        (this.route = e.route),
        (this.step_count = 0),
        (this.steps = this.route.legs[0].steps),
        (this.steps_length = this.steps.length)
      const t = {
        path: new google.maps.MVCArray(),
        strokeColor: e.strokeColor,
        strokeOpacity: e.strokeOpacity,
        strokeWeight: e.strokeWeight,
      }
      e.hasOwnProperty('icons') && (t.icons = e.icons),
        (this.polyline = this.map.drawPolyline(t).getPath())
    }),
    (c.Route.prototype.getRoute = function (t) {
      const o = this
      this.map.getRoutes({
        origin: this.origin,
        destination: this.destination,
        travelMode: t.travelMode,
        waypoints: this.waypoints || [],
        error: t.error,
        callback: function () {
          ;(o.route = e[0]), t.callback && t.callback.call(o)
        },
      })
    }),
    (c.Route.prototype.back = function () {
      if (this.step_count > 0) {
        this.step_count--
        const e = this.route.legs[0].steps[this.step_count].path
        for (const t in e) e.hasOwnProperty(t) && this.polyline.pop()
      }
    }),
    (c.Route.prototype.forward = function () {
      if (this.step_count < this.steps_length) {
        const e = this.route.legs[0].steps[this.step_count].path
        for (const t in e) e.hasOwnProperty(t) && this.polyline.push(e[t])
        this.step_count++
      }
    }),
    (c.prototype.checkGeofence = function (e, t, o) {
      return o.containsLatLng(new google.maps.LatLng(e, t))
    }),
    (c.prototype.checkMarkerGeofence = function (e, t) {
      if (e.fences)
        for (var o, n = 0; (o = e.fences[n]); n++) {
          const i = e.getPosition()
          this.checkGeofence(i.lat(), i.lng(), o) || t(e, o)
        }
    }),
    (c.prototype.toImage = function (e) {
      e = e || {}
      const t = {}
      if (
        ((t.size = e.size || [this.el.clientWidth, this.el.clientHeight]),
        (t.lat = this.getCenter().lat()),
        (t.lng = this.getCenter().lng()),
        this.markers.length > 0)
      ) {
        t.markers = []
        for (let o = 0; o < this.markers.length; o++)
          t.markers.push({
            lat: this.markers[o].getPosition().lat(),
            lng: this.markers[o].getPosition().lng(),
          })
      }
      if (this.polylines.length > 0) {
        const n = this.polylines[0]
        ;(t.polyline = {}),
          (t.polyline.path = google.maps.geometry.encoding.encodePath(
            n.getPath()
          )),
          (t.polyline.strokeColor = n.strokeColor),
          (t.polyline.strokeOpacity = n.strokeOpacity),
          (t.polyline.strokeWeight = n.strokeWeight)
      }
      return c.staticMapURL(t)
    }),
    (c.staticMapURL = function (e) {
      let t
      let o = []
      let n =
        (location.protocol === 'file:' ? 'http:' : location.protocol) +
        '//maps.googleapis.com/maps/api/staticmap'
      e.url && ((n = e.url), delete e.url), (n += '?')
      let i = e.markers
      delete e.markers, !i && e.marker && ((i = [e.marker]), delete e.marker)
      const r = e.styles
      delete e.styles
      let s = e.polyline
      if ((delete e.polyline, e.center))
        o.push('center=' + e.center), delete e.center
      else if (e.address) o.push('center=' + e.address), delete e.address
      else if (e.lat)
        o.push(['center=', e.lat, ',', e.lng].join('')),
          delete e.lat,
          delete e.lng
      else if (e.visible) {
        const a = encodeURI(e.visible.join('|'))
        o.push('visible=' + a)
      }
      let l = e.size
      l ? (l.join && (l = l.join('x')), delete e.size) : (l = '630x300'),
        o.push('size=' + l),
        e.zoom || !1 === e.zoom || (e.zoom = 15)
      const p = !e.hasOwnProperty('sensor') || !!e.sensor
      delete e.sensor, o.push('sensor=' + p)
      for (var c in e) e.hasOwnProperty(c) && o.push(c + '=' + e[c])
      if (i)
        for (var g, h, d = 0; (t = i[d]); d++) {
          ;(g = []),
            t.size && t.size !== 'normal'
              ? (g.push('size:' + t.size), delete t.size)
              : t.icon && (g.push('icon:' + encodeURI(t.icon)), delete t.icon),
            t.color &&
              (g.push('color:' + t.color.replace('#', '0x')), delete t.color),
            t.label &&
              (g.push('label:' + t.label[0].toUpperCase()), delete t.label),
            (h = t.address ? t.address : t.lat + ',' + t.lng),
            delete t.address,
            delete t.lat,
            delete t.lng
          for (var c in t) t.hasOwnProperty(c) && g.push(c + ':' + t[c])
          g.length || d === 0
            ? (g.push(h), (g = g.join('|')), o.push('markers=' + encodeURI(g)))
            : ((g = o.pop() + encodeURI('|' + h)), o.push(g))
        }
      if (r)
        for (d = 0; d < r.length; d++) {
          const u = []
          r[d].featureType &&
            u.push('feature:' + r[d].featureType.toLowerCase()),
            r[d].elementType &&
              u.push('element:' + r[d].elementType.toLowerCase())
          for (var m = 0; m < r[d].stylers.length; m++)
            for (const f in r[d].stylers[m]) {
              let y = r[d].stylers[m][f]
              ;(f != 'hue' && f != 'color') || (y = '0x' + y.substring(1)),
                u.push(f + ':' + y)
            }
          const v = u.join('|')
          v != '' && o.push('style=' + v)
        }
      function w(e, t) {
        if (e[0] === '#' && ((e = e.replace('#', '0x')), t)) {
          if (((t = parseFloat(t)), (t = Math.min(1, Math.max(t, 0))) === 0))
            return (
              '0x00000000'((t = (255 * t).toString(16))).length === 1 &&
                (t += t),
              (e = e.slice(0, 8) + t)
            )
        }
        return e
      }
      if (s) {
        if (
          ((t = s),
          (s = []),
          t.strokeWeight && s.push('weight:' + parseInt(t.strokeWeight, 10)),
          t.strokeColor)
        ) {
          const k = w(t.strokeColor, t.strokeOpacity)
          s.push('color:' + k)
        }
        if (t.fillColor) {
          const L = w(t.fillColor, t.fillOpacity)
          s.push('fillcolor:' + L)
        }
        const b = t.path
        if (b.join) {
          let _
          for (m = 0; (_ = b[m]); m++) s.push(_.join(','))
        } else s.push('enc:' + b)
        ;(s = s.join('|')), o.push('path=' + encodeURI(s))
      }
      const M = window.devicePixelRatio || 1
      return o.push('scale=' + M), n + (o = o.join('&'))
    }),
    (c.prototype.addMapType = function (e, t) {
      if (!t.hasOwnProperty('getTileUrl') || typeof t.getTileUrl !== 'function')
        throw "'getTileUrl' function required."
      t.tileSize = t.tileSize || new google.maps.Size(256, 256)
      const o = new google.maps.ImageMapType(t)
      this.map.mapTypes.set(e, o)
    }),
    (c.prototype.addOverlayMapType = function (e) {
      if (!e.hasOwnProperty('getTile') || typeof e.getTile !== 'function')
        throw "'getTile' function required."
      const t = e.index
      delete e.index, this.map.overlayMapTypes.insertAt(t, e)
    }),
    (c.prototype.removeOverlayMapType = function (e) {
      this.map.overlayMapTypes.removeAt(e)
    }),
    (c.prototype.addStyle = function (e) {
      const t = new google.maps.StyledMapType(e.styles, {
        name: e.styledMapName,
      })
      this.map.mapTypes.set(e.mapTypeId, t)
    }),
    (c.prototype.setStyle = function (e) {
      this.map.setMapTypeId(e)
    }),
    (c.prototype.createPanorama = function (e) {
      return (
        (e.hasOwnProperty('lat') && e.hasOwnProperty('lng')) ||
          ((e.lat = this.getCenter().lat()), (e.lng = this.getCenter().lng())),
        (this.panorama = c.createPanorama(e)),
        this.map.setStreetView(this.panorama),
        this.panorama
      )
    }),
    (c.createPanorama = function (e) {
      const t = p(e.el, e.context)
      ;(e.position = new google.maps.LatLng(e.lat, e.lng)),
        delete e.el,
        delete e.context,
        delete e.lat,
        delete e.lng
      for (
        var o = [
            'closeclick',
            'links_changed',
            'pano_changed',
            'position_changed',
            'pov_changed',
            'resize',
            'visible_changed',
          ],
          n = r({ visible: !0 }, e),
          i = 0;
        i < o.length;
        i++
      )
        delete n[o[i]]
      const s = new google.maps.StreetViewPanorama(t, n)
      for (i = 0; i < o.length; i++)
        !(function (t, o) {
          e[o] &&
            google.maps.event.addListener(t, o, function () {
              e[o].apply(this)
            })
        })(s, o[i])
      return s
    }),
    (c.prototype.on = function (e, t) {
      return c.on(e, this, t)
    }),
    (c.prototype.off = function (e) {
      c.off(e, this)
    }),
    (c.prototype.once = function (e, t) {
      return c.once(e, this, t)
    }),
    (c.custom_events = [
      'marker_added',
      'marker_removed',
      'polyline_added',
      'polyline_removed',
      'polygon_added',
      'polygon_removed',
      'geolocated',
      'geolocation_failed',
    ]),
    (c.on = function (e, t, o) {
      if (!c.custom_events.includes(e))
        return (
          t instanceof c && (t = t.map), google.maps.event.addListener(t, e, o)
        )
      const n = { handler: o, eventName: e }
      return (
        (t.registered_events[e] = t.registered_events[e] || []),
        t.registered_events[e].push(n),
        n
      )
    }),
    (c.off = function (e, t) {
      !c.custom_events.includes(e)
        ? (t instanceof c && (t = t.map),
          google.maps.event.clearListeners(t, e))
        : (t.registered_events[e] = [])
    }),
    (c.once = function (e, t, o) {
      if (!c.custom_events.includes(e))
        return (
          t instanceof c && (t = t.map),
          google.maps.event.addListenerOnce(t, e, o)
        )
    }),
    (c.fire = function (e, t, o) {
      if (!c.custom_events.includes(e))
        google.maps.event.trigger(
          t,
          e,
          Array.prototype.slice.apply(arguments).slice(2)
        )
      else if (e in o.registered_events)
        for (let n = o.registered_events[e], i = 0; i < n.length; i++)
          (r = n[i].handler), (s = o), (a = t), r.apply(s, [a])
      let r, s, a
    }),
    (c.geolocate = function (e) {
      const t = e.always || e.complete
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(
            function (o) {
              e.success(o), t && t()
            },
            function (o) {
              e.error(o), t && t()
            },
            e.options
          )
        : (e.not_supported(), t && t())
    }),
    (c.geocode = function (e) {
      this.geocoder = new google.maps.Geocoder()
      const t = e.callback
      e.hasOwnProperty('lat') &&
        e.hasOwnProperty('lng') &&
        (e.latLng = new google.maps.LatLng(e.lat, e.lng)),
        delete e.lat,
        delete e.lng,
        delete e.callback,
        this.geocoder.geocode(e, function (e, o) {
          t(e, o)
        })
    }),
    typeof window.google === 'object' &&
      window.google.maps &&
      (google.maps.Polygon.prototype.getBounds ||
        (google.maps.Polygon.prototype.getBounds = function (e) {
          for (
            var t,
              o = new google.maps.LatLngBounds(),
              n = this.getPaths(),
              i = 0;
            i < n.getLength();
            i++
          ) {
            t = n.getAt(i)
            for (let r = 0; r < t.getLength(); r++) o.extend(t.getAt(r))
          }
          return o
        }),
      google.maps.Polygon.prototype.containsLatLng ||
        (google.maps.Polygon.prototype.containsLatLng = function (e) {
          const t = this.getBounds()
          if (t !== null && !t.contains(e)) return !1
          for (var o = !1, n = this.getPaths().getLength(), i = 0; i < n; i++)
            for (
              let r = this.getPaths().getAt(i),
                s = r.getLength(),
                a = s - 1,
                l = 0;
              l < s;
              l++
            ) {
              const p = r.getAt(l)
              const c = r.getAt(a)
              ;((p.lng() < e.lng() && c.lng() >= e.lng()) ||
                (c.lng() < e.lng() && p.lng() >= e.lng())) &&
                p.lat() +
                  ((e.lng() - p.lng()) / (c.lng() - p.lng())) *
                    (c.lat() - p.lat()) <
                  e.lat() &&
                (o = !o),
                (a = l)
            }
          return o
        }),
      google.maps.Circle.prototype.containsLatLng ||
        (google.maps.Circle.prototype.containsLatLng = function (e) {
          return (
            !google.maps.geometry ||
            google.maps.geometry.spherical.computeDistanceBetween(
              this.getCenter(),
              e
            ) <= this.getRadius()
          )
        }),
      (google.maps.Rectangle.prototype.containsLatLng = function (e) {
        return this.getBounds().contains(e)
      }),
      (google.maps.LatLngBounds.prototype.containsLatLng = function (e) {
        return this.contains(e)
      }),
      (google.maps.Marker.prototype.setFences = function (e) {
        this.fences = e
      }),
      (google.maps.Marker.prototype.addFence = function (e) {
        this.fences.push(e)
      }),
      (google.maps.Marker.prototype.getId = function () {
        return this.__gm_id
      })),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = function (e) {
        if (this == null) throw new TypeError()
        const t = Object(this)
        const o = t.length >>> 0
        if (o === 0) return -1
        let n = 0
        if (
          (arguments.length > 1 &&
            ((n = Number(arguments[1])) != n
              ? (n = 0)
              : n != 0 &&
                n != 1 / 0 &&
                n != -1 / 0 &&
                (n = (n > 0 || -1) * Math.floor(Math.abs(n)))),
          n >= o)
        )
          return -1
        for (let i = n >= 0 ? n : Math.max(o - Math.abs(n), 0); i < o; i++)
          if (i in t && t[i] === e) return i
        return -1
      }),
    c
  )
})
