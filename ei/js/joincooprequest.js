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

goog.provide('proto.ei.JoinCoopRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ei.BasicRequestInfo');

goog.forwardDeclare('proto.ei.Contract.PlayerGrade');
goog.forwardDeclare('proto.ei.Platform');
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
proto.ei.JoinCoopRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.JoinCoopRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.JoinCoopRequest.displayName = 'proto.ei.JoinCoopRequest';
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
proto.ei.JoinCoopRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.JoinCoopRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.JoinCoopRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.JoinCoopRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
rinfo: (f = msg.getRinfo()) && proto.ei.BasicRequestInfo.toObject(includeInstance, f),
contractIdentifier: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
coopIdentifier: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
userId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
userName: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
soulPower: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
eop: (f = jspb.Message.getOptionalFloatingPointField(msg, 12)) == null ? undefined : f,
league: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
grade: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
pointsReplay: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f,
platform: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
secondsRemaining: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
clientVersion: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.ei.JoinCoopRequest}
 */
proto.ei.JoinCoopRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.JoinCoopRequest;
  return proto.ei.JoinCoopRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.JoinCoopRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.JoinCoopRequest}
 */
proto.ei.JoinCoopRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = new proto.ei.BasicRequestInfo;
      reader.readMessage(value,proto.ei.BasicRequestInfo.deserializeBinaryFromReader);
      msg.setRinfo(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContractIdentifier(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCoopIdentifier(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSoulPower(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEop(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeague(value);
      break;
    case 13:
      var value = /** @type {!proto.ei.Contract.PlayerGrade} */ (reader.readEnum());
      msg.setGrade(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPointsReplay(value);
      break;
    case 5:
      var value = /** @type {!proto.ei.Platform} */ (reader.readEnum());
      msg.setPlatform(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSecondsRemaining(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setClientVersion(value);
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
proto.ei.JoinCoopRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.JoinCoopRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.JoinCoopRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.JoinCoopRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRinfo();
  if (f != null) {
    writer.writeMessage(
      10,
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
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = /** @type {!proto.ei.Contract.PlayerGrade} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {!proto.ei.Platform} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
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
};


/**
 * optional BasicRequestInfo rinfo = 10;
 * @return {?proto.ei.BasicRequestInfo}
 */
proto.ei.JoinCoopRequest.prototype.getRinfo = function() {
  return /** @type{?proto.ei.BasicRequestInfo} */ (
    jspb.Message.getWrapperField(this, proto.ei.BasicRequestInfo, 10));
};


/**
 * @param {?proto.ei.BasicRequestInfo|undefined} value
 * @return {!proto.ei.JoinCoopRequest} returns this
*/
proto.ei.JoinCoopRequest.prototype.setRinfo = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearRinfo = function() {
  return this.setRinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasRinfo = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string contract_identifier = 1;
 * @return {string}
 */
proto.ei.JoinCoopRequest.prototype.getContractIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setContractIdentifier = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearContractIdentifier = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasContractIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string coop_identifier = 2;
 * @return {string}
 */
proto.ei.JoinCoopRequest.prototype.getCoopIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setCoopIdentifier = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearCoopIdentifier = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasCoopIdentifier = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.ei.JoinCoopRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string user_name = 4;
 * @return {string}
 */
proto.ei.JoinCoopRequest.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setUserName = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearUserName = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasUserName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double soul_power = 8;
 * @return {number}
 */
proto.ei.JoinCoopRequest.prototype.getSoulPower = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setSoulPower = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearSoulPower = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasSoulPower = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double eop = 12;
 * @return {number}
 */
proto.ei.JoinCoopRequest.prototype.getEop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setEop = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearEop = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasEop = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 league = 9;
 * @return {number}
 */
proto.ei.JoinCoopRequest.prototype.getLeague = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setLeague = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearLeague = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasLeague = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Contract.PlayerGrade grade = 13;
 * @return {!proto.ei.Contract.PlayerGrade}
 */
proto.ei.JoinCoopRequest.prototype.getGrade = function() {
  return /** @type {!proto.ei.Contract.PlayerGrade} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.ei.Contract.PlayerGrade} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setGrade = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearGrade = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasGrade = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool points_replay = 14;
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.getPointsReplay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setPointsReplay = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearPointsReplay = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasPointsReplay = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Platform platform = 5;
 * @return {!proto.ei.Platform}
 */
proto.ei.JoinCoopRequest.prototype.getPlatform = function() {
  return /** @type {!proto.ei.Platform} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ei.Platform} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setPlatform = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearPlatform = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasPlatform = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double seconds_remaining = 11;
 * @return {number}
 */
proto.ei.JoinCoopRequest.prototype.getSecondsRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setSecondsRemaining = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearSecondsRemaining = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasSecondsRemaining = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional uint32 client_version = 7;
 * @return {number}
 */
proto.ei.JoinCoopRequest.prototype.getClientVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.setClientVersion = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.JoinCoopRequest} returns this
 */
proto.ei.JoinCoopRequest.prototype.clearClientVersion = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.JoinCoopRequest.prototype.hasClientVersion = function() {
  return jspb.Message.getField(this, 7) != null;
};

