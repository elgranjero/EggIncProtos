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

goog.provide('proto.ei.ContractsArchive');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ei.LocalContract');

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
proto.ei.ContractsArchive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ei.ContractsArchive.repeatedFields_, null);
};
goog.inherits(proto.ei.ContractsArchive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.ContractsArchive.displayName = 'proto.ei.ContractsArchive';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ei.ContractsArchive.repeatedFields_ = [1];



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
proto.ei.ContractsArchive.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.ContractsArchive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.ContractsArchive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ContractsArchive.toObject = function(includeInstance, msg) {
  var f, obj = {
    archiveList: jspb.Message.toObjectList(msg.getArchiveList(),
    proto.ei.LocalContract.toObject, includeInstance)
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
 * @return {!proto.ei.ContractsArchive}
 */
proto.ei.ContractsArchive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.ContractsArchive;
  return proto.ei.ContractsArchive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.ContractsArchive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.ContractsArchive}
 */
proto.ei.ContractsArchive.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ei.LocalContract;
      reader.readMessage(value,proto.ei.LocalContract.deserializeBinaryFromReader);
      msg.addArchive(value);
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
proto.ei.ContractsArchive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.ContractsArchive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.ContractsArchive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ContractsArchive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArchiveList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ei.LocalContract.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LocalContract archive = 1;
 * @return {!Array<!proto.ei.LocalContract>}
 */
proto.ei.ContractsArchive.prototype.getArchiveList = function() {
  return /** @type{!Array<!proto.ei.LocalContract>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ei.LocalContract, 1));
};


/**
 * @param {!Array<!proto.ei.LocalContract>} value
 * @return {!proto.ei.ContractsArchive} returns this
*/
proto.ei.ContractsArchive.prototype.setArchiveList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ei.LocalContract=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ei.LocalContract}
 */
proto.ei.ContractsArchive.prototype.addArchive = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ei.LocalContract, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.ContractsArchive} returns this
 */
proto.ei.ContractsArchive.prototype.clearArchiveList = function() {
  return this.setArchiveList([]);
};

