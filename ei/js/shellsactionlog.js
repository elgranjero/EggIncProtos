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

goog.provide('proto.ei.ShellsActionLog');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ei.BasicRequestInfo');

goog.forwardDeclare('proto.ei.ShellDB.FarmElement');
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
proto.ei.ShellsActionLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.ShellsActionLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.ShellsActionLog.displayName = 'proto.ei.ShellsActionLog';
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
proto.ei.ShellsActionLog.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.ShellsActionLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.ShellsActionLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ShellsActionLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    rinfo: (f = msg.getRinfo()) && proto.ei.BasicRequestInfo.toObject(includeInstance, f),
    userId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    action: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    subId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    farmElement: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    cost: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    approxTime: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    version: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    farmIndex: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    soulEggs: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f,
    ticketsSpent: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    goldSpent: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f
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
 * @return {!proto.ei.ShellsActionLog}
 */
proto.ei.ShellsActionLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.ShellsActionLog;
  return proto.ei.ShellsActionLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.ShellsActionLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.ShellsActionLog}
 */
proto.ei.ShellsActionLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = new proto.ei.BasicRequestInfo;
      reader.readMessage(value,proto.ei.BasicRequestInfo.deserializeBinaryFromReader);
      msg.setRinfo(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubId(value);
      break;
    case 9:
      var value = /** @type {!proto.ei.ShellDB.FarmElement} */ (reader.readEnum());
      msg.setFarmElement(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCost(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setApproxTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFarmIndex(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSoulEggs(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTicketsSpent(value);
      break;
    case 12:
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
proto.ei.ShellsActionLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.ShellsActionLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.ShellsActionLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ShellsActionLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRinfo();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ei.BasicRequestInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.ei.ShellDB.FarmElement} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint64(
      12,
      f
    );
  }
};


/**
 * optional BasicRequestInfo rinfo = 8;
 * @return {?proto.ei.BasicRequestInfo}
 */
proto.ei.ShellsActionLog.prototype.getRinfo = function() {
  return /** @type{?proto.ei.BasicRequestInfo} */ (
    jspb.Message.getWrapperField(this, proto.ei.BasicRequestInfo, 8));
};


/**
 * @param {?proto.ei.BasicRequestInfo|undefined} value
 * @return {!proto.ei.ShellsActionLog} returns this
*/
proto.ei.ShellsActionLog.prototype.setRinfo = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearRinfo = function() {
  return this.setRinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasRinfo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.ei.ShellsActionLog.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string action = 2;
 * @return {string}
 */
proto.ei.ShellsActionLog.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setAction = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearAction = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string sub_id = 3;
 * @return {string}
 */
proto.ei.ShellsActionLog.prototype.getSubId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setSubId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearSubId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasSubId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ShellDB.FarmElement farm_element = 9;
 * @return {!proto.ei.ShellDB.FarmElement}
 */
proto.ei.ShellsActionLog.prototype.getFarmElement = function() {
  return /** @type {!proto.ei.ShellDB.FarmElement} */ (jspb.Message.getFieldWithDefault(this, 9, 1));
};


/**
 * @param {!proto.ei.ShellDB.FarmElement} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setFarmElement = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearFarmElement = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasFarmElement = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional uint32 cost = 4;
 * @return {number}
 */
proto.ei.ShellsActionLog.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setCost = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearCost = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasCost = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double approx_time = 5;
 * @return {number}
 */
proto.ei.ShellsActionLog.prototype.getApproxTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setApproxTime = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearApproxTime = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasApproxTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string version = 6;
 * @return {string}
 */
proto.ei.ShellsActionLog.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 farm_index = 7;
 * @return {number}
 */
proto.ei.ShellsActionLog.prototype.getFarmIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setFarmIndex = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearFarmIndex = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasFarmIndex = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double soul_eggs = 10;
 * @return {number}
 */
proto.ei.ShellsActionLog.prototype.getSoulEggs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setSoulEggs = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearSoulEggs = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasSoulEggs = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint64 tickets_spent = 11;
 * @return {number}
 */
proto.ei.ShellsActionLog.prototype.getTicketsSpent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setTicketsSpent = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearTicketsSpent = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasTicketsSpent = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint64 gold_spent = 12;
 * @return {number}
 */
proto.ei.ShellsActionLog.prototype.getGoldSpent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.setGoldSpent = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellsActionLog} returns this
 */
proto.ei.ShellsActionLog.prototype.clearGoldSpent = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellsActionLog.prototype.hasGoldSpent = function() {
  return jspb.Message.getField(this, 12) != null;
};


