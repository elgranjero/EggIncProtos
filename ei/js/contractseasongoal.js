// source: ei.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.ei.ContractSeasonGoal');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.ei.RewardType');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ei.ContractSeasonGoal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.ContractSeasonGoal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.ContractSeasonGoal.displayName = 'proto.ei.ContractSeasonGoal';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ei.ContractSeasonGoal.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.ContractSeasonGoal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.ContractSeasonGoal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ContractSeasonGoal.toObject = function(includeInstance, msg) {
  var f, obj = {
cxp: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
rewardType: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
rewardSubType: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
rewardAmount: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ei.ContractSeasonGoal}
 */
proto.ei.ContractSeasonGoal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.ContractSeasonGoal;
  return proto.ei.ContractSeasonGoal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.ContractSeasonGoal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.ContractSeasonGoal}
 */
proto.ei.ContractSeasonGoal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCxp(value);
      break;
    case 3:
      var value = /** @type {!proto.ei.RewardType} */ (reader.readEnum());
      msg.setRewardType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRewardSubType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRewardAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ei.ContractSeasonGoal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.ContractSeasonGoal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.ContractSeasonGoal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ContractSeasonGoal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {!proto.ei.RewardType} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional double cxp = 1;
 * @return {number}
 */
proto.ei.ContractSeasonGoal.prototype.getCxp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ContractSeasonGoal} returns this
 */
proto.ei.ContractSeasonGoal.prototype.setCxp = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractSeasonGoal} returns this
 */
proto.ei.ContractSeasonGoal.prototype.clearCxp = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractSeasonGoal.prototype.hasCxp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RewardType reward_type = 3;
 * @return {!proto.ei.RewardType}
 */
proto.ei.ContractSeasonGoal.prototype.getRewardType = function() {
  return /** @type {!proto.ei.RewardType} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {!proto.ei.RewardType} value
 * @return {!proto.ei.ContractSeasonGoal} returns this
 */
proto.ei.ContractSeasonGoal.prototype.setRewardType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractSeasonGoal} returns this
 */
proto.ei.ContractSeasonGoal.prototype.clearRewardType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractSeasonGoal.prototype.hasRewardType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reward_sub_type = 4;
 * @return {string}
 */
proto.ei.ContractSeasonGoal.prototype.getRewardSubType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ContractSeasonGoal} returns this
 */
proto.ei.ContractSeasonGoal.prototype.setRewardSubType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractSeasonGoal} returns this
 */
proto.ei.ContractSeasonGoal.prototype.clearRewardSubType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractSeasonGoal.prototype.hasRewardSubType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double reward_amount = 5;
 * @return {number}
 */
proto.ei.ContractSeasonGoal.prototype.getRewardAmount = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ContractSeasonGoal} returns this
 */
proto.ei.ContractSeasonGoal.prototype.setRewardAmount = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractSeasonGoal} returns this
 */
proto.ei.ContractSeasonGoal.prototype.clearRewardAmount = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractSeasonGoal.prototype.hasRewardAmount = function() {
  return jspb.Message.getField(this, 5) != null;
};

