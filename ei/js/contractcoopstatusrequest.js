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

goog.provide('proto.ei.ContractCoopStatusRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ei.BasicRequestInfo');

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
proto.ei.ContractCoopStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.ContractCoopStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.ContractCoopStatusRequest.displayName = 'proto.ei.ContractCoopStatusRequest';
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
proto.ei.ContractCoopStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.ContractCoopStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.ContractCoopStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ContractCoopStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
rinfo: (f = msg.getRinfo()) && proto.ei.BasicRequestInfo.toObject(includeInstance, f),
contractIdentifier: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
coopIdentifier: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
userId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
clientVersion: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
clientTimestamp: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.ei.ContractCoopStatusRequest}
 */
proto.ei.ContractCoopStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.ContractCoopStatusRequest;
  return proto.ei.ContractCoopStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.ContractCoopStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.ContractCoopStatusRequest}
 */
proto.ei.ContractCoopStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 5:
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setClientVersion(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setClientTimestamp(value);
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
proto.ei.ContractCoopStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.ContractCoopStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.ContractCoopStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ContractCoopStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRinfo();
  if (f != null) {
    writer.writeMessage(
      5,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
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
};


/**
 * optional BasicRequestInfo rinfo = 5;
 * @return {?proto.ei.BasicRequestInfo}
 */
proto.ei.ContractCoopStatusRequest.prototype.getRinfo = function() {
  return /** @type{?proto.ei.BasicRequestInfo} */ (
    jspb.Message.getWrapperField(this, proto.ei.BasicRequestInfo, 5));
};


/**
 * @param {?proto.ei.BasicRequestInfo|undefined} value
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
*/
proto.ei.ContractCoopStatusRequest.prototype.setRinfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.clearRinfo = function() {
  return this.setRinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractCoopStatusRequest.prototype.hasRinfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string contract_identifier = 1;
 * @return {string}
 */
proto.ei.ContractCoopStatusRequest.prototype.getContractIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.setContractIdentifier = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.clearContractIdentifier = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractCoopStatusRequest.prototype.hasContractIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string coop_identifier = 2;
 * @return {string}
 */
proto.ei.ContractCoopStatusRequest.prototype.getCoopIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.setCoopIdentifier = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.clearCoopIdentifier = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractCoopStatusRequest.prototype.hasCoopIdentifier = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string user_id = 3;
 * @return {string}
 */
proto.ei.ContractCoopStatusRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractCoopStatusRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 client_version = 4;
 * @return {number}
 */
proto.ei.ContractCoopStatusRequest.prototype.getClientVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.setClientVersion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.clearClientVersion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractCoopStatusRequest.prototype.hasClientVersion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double client_timestamp = 6;
 * @return {number}
 */
proto.ei.ContractCoopStatusRequest.prototype.getClientTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.setClientTimestamp = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractCoopStatusRequest} returns this
 */
proto.ei.ContractCoopStatusRequest.prototype.clearClientTimestamp = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractCoopStatusRequest.prototype.hasClientTimestamp = function() {
  return jspb.Message.getField(this, 6) != null;
};

