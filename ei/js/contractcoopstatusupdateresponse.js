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

goog.provide('proto.ei.ContractCoopStatusUpdateResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.ei.ContractCoopStatusResponse.MemberStatus');
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
proto.ei.ContractCoopStatusUpdateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.ContractCoopStatusUpdateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.ContractCoopStatusUpdateResponse.displayName = 'proto.ei.ContractCoopStatusUpdateResponse';
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
proto.ei.ContractCoopStatusUpdateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.ContractCoopStatusUpdateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.ContractCoopStatusUpdateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ContractCoopStatusUpdateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    finalized: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    exists: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
    status: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ei.ContractCoopStatusUpdateResponse}
 */
proto.ei.ContractCoopStatusUpdateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.ContractCoopStatusUpdateResponse;
  return proto.ei.ContractCoopStatusUpdateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.ContractCoopStatusUpdateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.ContractCoopStatusUpdateResponse}
 */
proto.ei.ContractCoopStatusUpdateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinalized(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExists(value);
      break;
    case 3:
      var value = /** @type {!proto.ei.ContractCoopStatusResponse.MemberStatus} */ (reader.readEnum());
      msg.setStatus(value);
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
proto.ei.ContractCoopStatusUpdateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.ContractCoopStatusUpdateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.ContractCoopStatusUpdateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ContractCoopStatusUpdateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {!proto.ei.ContractCoopStatusResponse.MemberStatus} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional bool finalized = 1;
 * @return {boolean}
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.getFinalized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.ContractCoopStatusUpdateResponse} returns this
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.setFinalized = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractCoopStatusUpdateResponse} returns this
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.clearFinalized = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.hasFinalized = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool exists = 2;
 * @return {boolean}
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.getExists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.ContractCoopStatusUpdateResponse} returns this
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.setExists = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractCoopStatusUpdateResponse} returns this
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.clearExists = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.hasExists = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContractCoopStatusResponse.MemberStatus status = 3;
 * @return {!proto.ei.ContractCoopStatusResponse.MemberStatus}
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.getStatus = function() {
  return /** @type {!proto.ei.ContractCoopStatusResponse.MemberStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ei.ContractCoopStatusResponse.MemberStatus} value
 * @return {!proto.ei.ContractCoopStatusUpdateResponse} returns this
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ContractCoopStatusUpdateResponse} returns this
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ContractCoopStatusUpdateResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};

