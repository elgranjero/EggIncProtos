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

goog.provide('proto.ei.LogSetArtifactPayload');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ei.SetArtifactRequest');
goog.require('proto.ei.SetArtifactResponse');

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
proto.ei.LogSetArtifactPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.LogSetArtifactPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.LogSetArtifactPayload.displayName = 'proto.ei.LogSetArtifactPayload';
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
proto.ei.LogSetArtifactPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.LogSetArtifactPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.LogSetArtifactPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.LogSetArtifactPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    req: (f = msg.getReq()) && proto.ei.SetArtifactRequest.toObject(includeInstance, f),
    res: (f = msg.getRes()) && proto.ei.SetArtifactResponse.toObject(includeInstance, f)
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
 * @return {!proto.ei.LogSetArtifactPayload}
 */
proto.ei.LogSetArtifactPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.LogSetArtifactPayload;
  return proto.ei.LogSetArtifactPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.LogSetArtifactPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.LogSetArtifactPayload}
 */
proto.ei.LogSetArtifactPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ei.SetArtifactRequest;
      reader.readMessage(value,proto.ei.SetArtifactRequest.deserializeBinaryFromReader);
      msg.setReq(value);
      break;
    case 2:
      var value = new proto.ei.SetArtifactResponse;
      reader.readMessage(value,proto.ei.SetArtifactResponse.deserializeBinaryFromReader);
      msg.setRes(value);
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
proto.ei.LogSetArtifactPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.LogSetArtifactPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.LogSetArtifactPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.LogSetArtifactPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReq();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ei.SetArtifactRequest.serializeBinaryToWriter
    );
  }
  f = message.getRes();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ei.SetArtifactResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional SetArtifactRequest req = 1;
 * @return {?proto.ei.SetArtifactRequest}
 */
proto.ei.LogSetArtifactPayload.prototype.getReq = function() {
  return /** @type{?proto.ei.SetArtifactRequest} */ (
    jspb.Message.getWrapperField(this, proto.ei.SetArtifactRequest, 1));
};


/**
 * @param {?proto.ei.SetArtifactRequest|undefined} value
 * @return {!proto.ei.LogSetArtifactPayload} returns this
*/
proto.ei.LogSetArtifactPayload.prototype.setReq = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.LogSetArtifactPayload} returns this
 */
proto.ei.LogSetArtifactPayload.prototype.clearReq = function() {
  return this.setReq(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LogSetArtifactPayload.prototype.hasReq = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SetArtifactResponse res = 2;
 * @return {?proto.ei.SetArtifactResponse}
 */
proto.ei.LogSetArtifactPayload.prototype.getRes = function() {
  return /** @type{?proto.ei.SetArtifactResponse} */ (
    jspb.Message.getWrapperField(this, proto.ei.SetArtifactResponse, 2));
};


/**
 * @param {?proto.ei.SetArtifactResponse|undefined} value
 * @return {!proto.ei.LogSetArtifactPayload} returns this
*/
proto.ei.LogSetArtifactPayload.prototype.setRes = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.LogSetArtifactPayload} returns this
 */
proto.ei.LogSetArtifactPayload.prototype.clearRes = function() {
  return this.setRes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LogSetArtifactPayload.prototype.hasRes = function() {
  return jspb.Message.getField(this, 2) != null;
};

