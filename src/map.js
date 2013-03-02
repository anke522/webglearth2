/**
 *
 * @author petr.sloup@klokantech.com (Petr Sloup)
 *
 * Copyright 2013 Klokan Technologies Gmbh (www.klokantech.com)
 */

goog.provide('weapi.Map');



/**
 * @param {!Cesium.ImageryLayer} layer .
 * @constructor
 */
weapi.Map = function(layer) {
  /**
   * @type {!Cesium.ImageryLayer}
   */
  this.layer = layer;
};


/**
 * @param {number} minLat Minimal latitude in degrees.
 * @param {number} maxLat Maximal latitude in degrees.
 * @param {number} minLon Minimal longitude in degrees.
 * @param {number} maxLon Maximal longitude in degrees.
 */
weapi.Map.prototype.setBoundingBox = function(minLat, maxLat,
                                              minLon, maxLon) {
  var extent = this.layer.getImageryProvider().getExtent();
  extent.south = minLat;
  extent.north = maxLat;
  extent.west = minLon;
  extent.east = maxLon;
};


/**
 * @param {number} opacity Opacity.
 */
weapi.Map.prototype.setOpacity = function(opacity) {
  this.layer.alpha = opacity;
};


/**
 * @return {number} Opacity.
 */
weapi.Map.prototype.getOpacity = function() {
  return this.layer.alpha;
};
