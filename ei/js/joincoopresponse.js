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

goog.provide('proto.ei.JoinCoopResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.ei.Contract.PlayerGrade');
goog.forwardDeclare('proto.ei.ContractCoopStatusResponse.Status');
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
proto.ei.JoinCoopResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.JoinCoopResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.JoinCoopResponse.displayName = 'proto.ei.JoinCoopResponse';
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
proto.ei.JoinCoopResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.JoinCoopResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.JoinCoopResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.JoinCoopResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
message: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
banned: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
coopIdentifier: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
secondsRemaining: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
matchPercent: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
numMembers: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
status: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
grade: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
canStart: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f
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
 * @return {!proto.ei.JoinCoopResponse}
 */
proto.ei.JoinCoopResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.JoinCoopResponse;
  return proto.ei.JoinCoopResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.JoinCoopResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.JoinCoopResponse}
 */
proto.ei.JoinCoopResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBanned(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCoopIdentifier(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSecondsRemaining(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMatchPercent(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumMembers(value);
      break;
    case 8:
      var value = /** @type {!proto.ei.ContractCoopStatusResponse.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {!proto.ei.Contract.PlayerGrade} */ (reader.readEnum());
      msg.setGrade(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanStart(value);
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
proto.ei.JoinCoopResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.JoinCoopResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.JoinCoopResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.JoinCoopResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = /** @type {!proto.ei.ContractCoopStatusResponse.Status} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = /** @type {!proto.ei.Contract.PlayerGrade} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearSuccess = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.ei.JoinCoopResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool banned = 4;
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.getBanned = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setBanned = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearBanned = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasBanned = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string coop_identifier = 5;
 * @return {string}
 */
proto.ei.JoinCoopResponse.prototype.getCoopIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setCoopIdentifier = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearCoopIdentifier = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasCoopIdentifier = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double seconds_remaining = 3;
 * @return {number}
 */
proto.ei.JoinCoopResponse.prototype.getSecondsRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setSecondsRemaining = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearSecondsRemaining = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasSecondsRemaining = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double match_percent = 6;
 * @return {number}
 */
proto.ei.JoinCoopResponse.prototype.getMatchPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setMatchPercent = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearMatchPercent = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasMatchPercent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 num_members = 7;
 * @return {number}
 */
proto.ei.JoinCoopResponse.prototype.getNumMembers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setNumMembers = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearNumMembers = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasNumMembers = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ContractCoopStatusResponse.Status status = 8;
 * @return {!proto.ei.ContractCoopStatusResponse.Status}
 */
proto.ei.JoinCoopResponse.prototype.getStatus = function() {
  return /** @type {!proto.ei.ContractCoopStatusResponse.Status} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ei.ContractCoopStatusResponse.Status} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Contract.PlayerGrade grade = 9;
 * @return {!proto.ei.Contract.PlayerGrade}
 */
proto.ei.JoinCoopResponse.prototype.getGrade = function() {
  return /** @type {!proto.ei.Contract.PlayerGrade} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.ei.Contract.PlayerGrade} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setGrade = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearGrade = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasGrade = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool can_start = 10;
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.getCanStart = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.setCanStart = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopResponse} returns this
 */
proto.ei.JoinCoopResponse.prototype.clearCanStart = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopResponse.prototype.hasCanStart = function() {
  return jspb.Message.getField(this, 10) != null;
};

