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

goog.provide('proto.ei.MyContracts');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ei.ContractCoopStatusResponse');
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
proto.ei.MyContracts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ei.MyContracts.repeatedFields_, null);
};
goog.inherits(proto.ei.MyContracts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.MyContracts.displayName = 'proto.ei.MyContracts';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ei.MyContracts.repeatedFields_ = [3,1,2,4];



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
proto.ei.MyContracts.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.MyContracts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.MyContracts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.MyContracts.toObject = function(includeInstance, msg) {
  var f, obj = {
    contractIdsSeenList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    contractsList: jspb.Message.toObjectList(msg.getContractsList(),
    proto.ei.LocalContract.toObject, includeInstance),
    archiveList: jspb.Message.toObjectList(msg.getArchiveList(),
    proto.ei.LocalContract.toObject, includeInstance),
    currentCoopStatusesList: jspb.Message.toObjectList(msg.getCurrentCoopStatusesList(),
    proto.ei.ContractCoopStatusResponse.toObject, includeInstance)
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
 * @return {!proto.ei.MyContracts}
 */
proto.ei.MyContracts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.MyContracts;
  return proto.ei.MyContracts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.MyContracts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.MyContracts}
 */
proto.ei.MyContracts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addContractIdsSeen(value);
      break;
    case 1:
      var value = new proto.ei.LocalContract;
      reader.readMessage(value,proto.ei.LocalContract.deserializeBinaryFromReader);
      msg.addContracts(value);
      break;
    case 2:
      var value = new proto.ei.LocalContract;
      reader.readMessage(value,proto.ei.LocalContract.deserializeBinaryFromReader);
      msg.addArchive(value);
      break;
    case 4:
      var value = new proto.ei.ContractCoopStatusResponse;
      reader.readMessage(value,proto.ei.ContractCoopStatusResponse.deserializeBinaryFromReader);
      msg.addCurrentCoopStatuses(value);
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
proto.ei.MyContracts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.MyContracts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.MyContracts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.MyContracts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContractIdsSeenList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getContractsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ei.LocalContract.serializeBinaryToWriter
    );
  }
  f = message.getArchiveList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ei.LocalContract.serializeBinaryToWriter
    );
  }
  f = message.getCurrentCoopStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ei.ContractCoopStatusResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string contract_ids_seen = 3;
 * @return {!Array<string>}
 */
proto.ei.MyContracts.prototype.getContractIdsSeenList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ei.MyContracts} returns this
 */
proto.ei.MyContracts.prototype.setContractIdsSeenList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ei.MyContracts} returns this
 */
proto.ei.MyContracts.prototype.addContractIdsSeen = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.MyContracts} returns this
 */
proto.ei.MyContracts.prototype.clearContractIdsSeenList = function() {
  return this.setContractIdsSeenList([]);
};


/**
 * repeated LocalContract contracts = 1;
 * @return {!Array<!proto.ei.LocalContract>}
 */
proto.ei.MyContracts.prototype.getContractsList = function() {
  return /** @type{!Array<!proto.ei.LocalContract>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ei.LocalContract, 1));
};


/**
 * @param {!Array<!proto.ei.LocalContract>} value
 * @return {!proto.ei.MyContracts} returns this
*/
proto.ei.MyContracts.prototype.setContractsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ei.LocalContract=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ei.LocalContract}
 */
proto.ei.MyContracts.prototype.addContracts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ei.LocalContract, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.MyContracts} returns this
 */
proto.ei.MyContracts.prototype.clearContractsList = function() {
  return this.setContractsList([]);
};


/**
 * repeated LocalContract archive = 2;
 * @return {!Array<!proto.ei.LocalContract>}
 */
proto.ei.MyContracts.prototype.getArchiveList = function() {
  return /** @type{!Array<!proto.ei.LocalContract>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ei.LocalContract, 2));
};


/**
 * @param {!Array<!proto.ei.LocalContract>} value
 * @return {!proto.ei.MyContracts} returns this
*/
proto.ei.MyContracts.prototype.setArchiveList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ei.LocalContract=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ei.LocalContract}
 */
proto.ei.MyContracts.prototype.addArchive = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ei.LocalContract, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.MyContracts} returns this
 */
proto.ei.MyContracts.prototype.clearArchiveList = function() {
  return this.setArchiveList([]);
};


/**
 * repeated ContractCoopStatusResponse current_coop_statuses = 4;
 * @return {!Array<!proto.ei.ContractCoopStatusResponse>}
 */
proto.ei.MyContracts.prototype.getCurrentCoopStatusesList = function() {
  return /** @type{!Array<!proto.ei.ContractCoopStatusResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ei.ContractCoopStatusResponse, 4));
};


/**
 * @param {!Array<!proto.ei.ContractCoopStatusResponse>} value
 * @return {!proto.ei.MyContracts} returns this
*/
proto.ei.MyContracts.prototype.setCurrentCoopStatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ei.ContractCoopStatusResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ei.ContractCoopStatusResponse}
 */
proto.ei.MyContracts.prototype.addCurrentCoopStatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ei.ContractCoopStatusResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.MyContracts} returns this
 */
proto.ei.MyContracts.prototype.clearCurrentCoopStatusesList = function() {
  return this.setCurrentCoopStatusesList([]);
};

