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

goog.provide('proto.ei.CurrencyFlowLog');

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
proto.ei.CurrencyFlowLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.CurrencyFlowLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.CurrencyFlowLog.displayName = 'proto.ei.CurrencyFlowLog';
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
proto.ei.CurrencyFlowLog.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.CurrencyFlowLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.CurrencyFlowLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.CurrencyFlowLog.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
approxTime: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
currency: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
amount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
location: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
version: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
platform: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
soulEggs: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
ticketsSpent: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
goldSpent: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
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
 * @return {!proto.ei.CurrencyFlowLog}
 */
proto.ei.CurrencyFlowLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.CurrencyFlowLog;
  return proto.ei.CurrencyFlowLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.CurrencyFlowLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.CurrencyFlowLog}
 */
proto.ei.CurrencyFlowLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setApproxTime(value);
      break;
    case 3:
      var value = /** @type {!proto.ei.RewardType} */ (reader.readEnum());
      msg.setCurrency(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSoulEggs(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTicketsSpent(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGoldSpent(value);
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
proto.ei.CurrencyFlowLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.CurrencyFlowLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.CurrencyFlowLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.CurrencyFlowLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint64(
      10,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.ei.CurrencyFlowLog.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double approx_time = 2;
 * @return {number}
 */
proto.ei.CurrencyFlowLog.prototype.getApproxTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setApproxTime = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearApproxTime = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasApproxTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RewardType currency = 3;
 * @return {!proto.ei.RewardType}
 */
proto.ei.CurrencyFlowLog.prototype.getCurrency = function() {
  return /** @type {!proto.ei.RewardType} */ (jspb.Message.getFieldWithDefault(this, 3, 1));
};


/**
 * @param {!proto.ei.RewardType} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setCurrency = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearCurrency = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasCurrency = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 amount = 4;
 * @return {number}
 */
proto.ei.CurrencyFlowLog.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setAmount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearAmount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string location = 5;
 * @return {string}
 */
proto.ei.CurrencyFlowLog.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setLocation = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearLocation = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string version = 6;
 * @return {string}
 */
proto.ei.CurrencyFlowLog.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string platform = 7;
 * @return {string}
 */
proto.ei.CurrencyFlowLog.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setPlatform = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearPlatform = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasPlatform = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double soul_eggs = 8;
 * @return {number}
 */
proto.ei.CurrencyFlowLog.prototype.getSoulEggs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setSoulEggs = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearSoulEggs = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasSoulEggs = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 tickets_spent = 9;
 * @return {number}
 */
proto.ei.CurrencyFlowLog.prototype.getTicketsSpent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setTicketsSpent = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearTicketsSpent = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasTicketsSpent = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint64 gold_spent = 10;
 * @return {number}
 */
proto.ei.CurrencyFlowLog.prototype.getGoldSpent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.setGoldSpent = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.CurrencyFlowLog} returns this
 */
proto.ei.CurrencyFlowLog.prototype.clearGoldSpent = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.CurrencyFlowLog.prototype.hasGoldSpent = function() {
  return jspb.Message.getField(this, 10) != null;
};

