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

goog.provide('proto.ei.PeriodicalsResponse');
goog.provide('proto.ei.PeriodicalsResponse.RoyaltyInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ei.CompleteMissionResponse');
goog.require('proto.ei.ContractEvaluation');
goog.require('proto.ei.ContractPlayerInfo');
goog.require('proto.ei.ContractsResponse');
goog.require('proto.ei.EggIncCurrentEvents');
goog.require('proto.ei.LiveConfig');
goog.require('proto.ei.MailDB');
goog.require('proto.ei.SalesInfo');
goog.require('proto.ei.ServerGift');

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
proto.ei.PeriodicalsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ei.PeriodicalsResponse.repeatedFields_, null);
};
goog.inherits(proto.ei.PeriodicalsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.PeriodicalsResponse.displayName = 'proto.ei.PeriodicalsResponse';
}
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
proto.ei.PeriodicalsResponse.RoyaltyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.PeriodicalsResponse.RoyaltyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.PeriodicalsResponse.RoyaltyInfo.displayName = 'proto.ei.PeriodicalsResponse.RoyaltyInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ei.PeriodicalsResponse.repeatedFields_ = [8,4,9,10];



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
proto.ei.PeriodicalsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.PeriodicalsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.PeriodicalsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.PeriodicalsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
sales: (f = msg.getSales()) && proto.ei.SalesInfo.toObject(includeInstance, f),
events: (f = msg.getEvents()) && proto.ei.EggIncCurrentEvents.toObject(includeInstance, f),
contracts: (f = msg.getContracts()) && proto.ei.ContractsResponse.toObject(includeInstance, f),
evaluationsList: jspb.Message.toObjectList(msg.getEvaluationsList(),
    proto.ei.ContractEvaluation.toObject, includeInstance),
giftsList: jspb.Message.toObjectList(msg.getGiftsList(),
    proto.ei.ServerGift.toObject, includeInstance),
artifactCasesList: jspb.Message.toObjectList(msg.getArtifactCasesList(),
    proto.ei.CompleteMissionResponse.toObject, includeInstance),
liveConfig: (f = msg.getLiveConfig()) && proto.ei.LiveConfig.toObject(includeInstance, f),
mailBag: (f = msg.getMailBag()) && proto.ei.MailDB.toObject(includeInstance, f),
contractPlayerInfo: (f = msg.getContractPlayerInfo()) && proto.ei.ContractPlayerInfo.toObject(includeInstance, f),
showcaseRoyaltiesList: jspb.Message.toObjectList(msg.getShowcaseRoyaltiesList(),
    proto.ei.PeriodicalsResponse.RoyaltyInfo.toObject, includeInstance)
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
 * @return {!proto.ei.PeriodicalsResponse}
 */
proto.ei.PeriodicalsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.PeriodicalsResponse;
  return proto.ei.PeriodicalsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.PeriodicalsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.PeriodicalsResponse}
 */
proto.ei.PeriodicalsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ei.SalesInfo;
      reader.readMessage(value,proto.ei.SalesInfo.deserializeBinaryFromReader);
      msg.setSales(value);
      break;
    case 2:
      var value = new proto.ei.EggIncCurrentEvents;
      reader.readMessage(value,proto.ei.EggIncCurrentEvents.deserializeBinaryFromReader);
      msg.setEvents(value);
      break;
    case 3:
      var value = new proto.ei.ContractsResponse;
      reader.readMessage(value,proto.ei.ContractsResponse.deserializeBinaryFromReader);
      msg.setContracts(value);
      break;
    case 8:
      var value = new proto.ei.ContractEvaluation;
      reader.readMessage(value,proto.ei.ContractEvaluation.deserializeBinaryFromReader);
      msg.addEvaluations(value);
      break;
    case 4:
      var value = new proto.ei.ServerGift;
      reader.readMessage(value,proto.ei.ServerGift.deserializeBinaryFromReader);
      msg.addGifts(value);
      break;
    case 9:
      var value = new proto.ei.CompleteMissionResponse;
      reader.readMessage(value,proto.ei.CompleteMissionResponse.deserializeBinaryFromReader);
      msg.addArtifactCases(value);
      break;
    case 5:
      var value = new proto.ei.LiveConfig;
      reader.readMessage(value,proto.ei.LiveConfig.deserializeBinaryFromReader);
      msg.setLiveConfig(value);
      break;
    case 6:
      var value = new proto.ei.MailDB;
      reader.readMessage(value,proto.ei.MailDB.deserializeBinaryFromReader);
      msg.setMailBag(value);
      break;
    case 7:
      var value = new proto.ei.ContractPlayerInfo;
      reader.readMessage(value,proto.ei.ContractPlayerInfo.deserializeBinaryFromReader);
      msg.setContractPlayerInfo(value);
      break;
    case 10:
      var value = new proto.ei.PeriodicalsResponse.RoyaltyInfo;
      reader.readMessage(value,proto.ei.PeriodicalsResponse.RoyaltyInfo.deserializeBinaryFromReader);
      msg.addShowcaseRoyalties(value);
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
proto.ei.PeriodicalsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.PeriodicalsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.PeriodicalsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.PeriodicalsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSales();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ei.SalesInfo.serializeBinaryToWriter
    );
  }
  f = message.getEvents();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ei.EggIncCurrentEvents.serializeBinaryToWriter
    );
  }
  f = message.getContracts();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ei.ContractsResponse.serializeBinaryToWriter
    );
  }
  f = message.getEvaluationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.ei.ContractEvaluation.serializeBinaryToWriter
    );
  }
  f = message.getGiftsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ei.ServerGift.serializeBinaryToWriter
    );
  }
  f = message.getArtifactCasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.ei.CompleteMissionResponse.serializeBinaryToWriter
    );
  }
  f = message.getLiveConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ei.LiveConfig.serializeBinaryToWriter
    );
  }
  f = message.getMailBag();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ei.MailDB.serializeBinaryToWriter
    );
  }
  f = message.getContractPlayerInfo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ei.ContractPlayerInfo.serializeBinaryToWriter
    );
  }
  f = message.getShowcaseRoyaltiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.ei.PeriodicalsResponse.RoyaltyInfo.serializeBinaryToWriter
    );
  }
};





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
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.PeriodicalsResponse.RoyaltyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.PeriodicalsResponse.RoyaltyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
amount: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ei.PeriodicalsResponse.RoyaltyInfo}
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.PeriodicalsResponse.RoyaltyInfo;
  return proto.ei.PeriodicalsResponse.RoyaltyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.PeriodicalsResponse.RoyaltyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.PeriodicalsResponse.RoyaltyInfo}
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAmount(value);
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
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.PeriodicalsResponse.RoyaltyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.PeriodicalsResponse.RoyaltyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.PeriodicalsResponse.RoyaltyInfo} returns this
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.PeriodicalsResponse.RoyaltyInfo} returns this
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 amount = 2;
 * @return {number}
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.PeriodicalsResponse.RoyaltyInfo} returns this
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.setAmount = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.PeriodicalsResponse.RoyaltyInfo} returns this
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.clearAmount = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.PeriodicalsResponse.RoyaltyInfo.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SalesInfo sales = 1;
 * @return {?proto.ei.SalesInfo}
 */
proto.ei.PeriodicalsResponse.prototype.getSales = function() {
  return /** @type{?proto.ei.SalesInfo} */ (
    jspb.Message.getWrapperField(this, proto.ei.SalesInfo, 1));
};


/**
 * @param {?proto.ei.SalesInfo|undefined} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setSales = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearSales = function() {
  return this.setSales(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.PeriodicalsResponse.prototype.hasSales = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional EggIncCurrentEvents events = 2;
 * @return {?proto.ei.EggIncCurrentEvents}
 */
proto.ei.PeriodicalsResponse.prototype.getEvents = function() {
  return /** @type{?proto.ei.EggIncCurrentEvents} */ (
    jspb.Message.getWrapperField(this, proto.ei.EggIncCurrentEvents, 2));
};


/**
 * @param {?proto.ei.EggIncCurrentEvents|undefined} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setEvents = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearEvents = function() {
  return this.setEvents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.PeriodicalsResponse.prototype.hasEvents = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ContractsResponse contracts = 3;
 * @return {?proto.ei.ContractsResponse}
 */
proto.ei.PeriodicalsResponse.prototype.getContracts = function() {
  return /** @type{?proto.ei.ContractsResponse} */ (
    jspb.Message.getWrapperField(this, proto.ei.ContractsResponse, 3));
};


/**
 * @param {?proto.ei.ContractsResponse|undefined} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setContracts = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearContracts = function() {
  return this.setContracts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.PeriodicalsResponse.prototype.hasContracts = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ContractEvaluation evaluations = 8;
 * @return {!Array<!proto.ei.ContractEvaluation>}
 */
proto.ei.PeriodicalsResponse.prototype.getEvaluationsList = function() {
  return /** @type{!Array<!proto.ei.ContractEvaluation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ei.ContractEvaluation, 8));
};


/**
 * @param {!Array<!proto.ei.ContractEvaluation>} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setEvaluationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.ei.ContractEvaluation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ei.ContractEvaluation}
 */
proto.ei.PeriodicalsResponse.prototype.addEvaluations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.ei.ContractEvaluation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearEvaluationsList = function() {
  return this.setEvaluationsList([]);
};


/**
 * repeated ServerGift gifts = 4;
 * @return {!Array<!proto.ei.ServerGift>}
 */
proto.ei.PeriodicalsResponse.prototype.getGiftsList = function() {
  return /** @type{!Array<!proto.ei.ServerGift>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ei.ServerGift, 4));
};


/**
 * @param {!Array<!proto.ei.ServerGift>} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setGiftsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ei.ServerGift=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ei.ServerGift}
 */
proto.ei.PeriodicalsResponse.prototype.addGifts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ei.ServerGift, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearGiftsList = function() {
  return this.setGiftsList([]);
};


/**
 * repeated CompleteMissionResponse artifact_cases = 9;
 * @return {!Array<!proto.ei.CompleteMissionResponse>}
 */
proto.ei.PeriodicalsResponse.prototype.getArtifactCasesList = function() {
  return /** @type{!Array<!proto.ei.CompleteMissionResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ei.CompleteMissionResponse, 9));
};


/**
 * @param {!Array<!proto.ei.CompleteMissionResponse>} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setArtifactCasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.ei.CompleteMissionResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ei.CompleteMissionResponse}
 */
proto.ei.PeriodicalsResponse.prototype.addArtifactCases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.ei.CompleteMissionResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearArtifactCasesList = function() {
  return this.setArtifactCasesList([]);
};


/**
 * optional LiveConfig live_config = 5;
 * @return {?proto.ei.LiveConfig}
 */
proto.ei.PeriodicalsResponse.prototype.getLiveConfig = function() {
  return /** @type{?proto.ei.LiveConfig} */ (
    jspb.Message.getWrapperField(this, proto.ei.LiveConfig, 5));
};


/**
 * @param {?proto.ei.LiveConfig|undefined} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setLiveConfig = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearLiveConfig = function() {
  return this.setLiveConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.PeriodicalsResponse.prototype.hasLiveConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MailDB mail_bag = 6;
 * @return {?proto.ei.MailDB}
 */
proto.ei.PeriodicalsResponse.prototype.getMailBag = function() {
  return /** @type{?proto.ei.MailDB} */ (
    jspb.Message.getWrapperField(this, proto.ei.MailDB, 6));
};


/**
 * @param {?proto.ei.MailDB|undefined} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setMailBag = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearMailBag = function() {
  return this.setMailBag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.PeriodicalsResponse.prototype.hasMailBag = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ContractPlayerInfo contract_player_info = 7;
 * @return {?proto.ei.ContractPlayerInfo}
 */
proto.ei.PeriodicalsResponse.prototype.getContractPlayerInfo = function() {
  return /** @type{?proto.ei.ContractPlayerInfo} */ (
    jspb.Message.getWrapperField(this, proto.ei.ContractPlayerInfo, 7));
};


/**
 * @param {?proto.ei.ContractPlayerInfo|undefined} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setContractPlayerInfo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearContractPlayerInfo = function() {
  return this.setContractPlayerInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.PeriodicalsResponse.prototype.hasContractPlayerInfo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated RoyaltyInfo showcase_royalties = 10;
 * @return {!Array<!proto.ei.PeriodicalsResponse.RoyaltyInfo>}
 */
proto.ei.PeriodicalsResponse.prototype.getShowcaseRoyaltiesList = function() {
  return /** @type{!Array<!proto.ei.PeriodicalsResponse.RoyaltyInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ei.PeriodicalsResponse.RoyaltyInfo, 10));
};


/**
 * @param {!Array<!proto.ei.PeriodicalsResponse.RoyaltyInfo>} value
 * @return {!proto.ei.PeriodicalsResponse} returns this
*/
proto.ei.PeriodicalsResponse.prototype.setShowcaseRoyaltiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.ei.PeriodicalsResponse.RoyaltyInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ei.PeriodicalsResponse.RoyaltyInfo}
 */
proto.ei.PeriodicalsResponse.prototype.addShowcaseRoyalties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.ei.PeriodicalsResponse.RoyaltyInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.PeriodicalsResponse} returns this
 */
proto.ei.PeriodicalsResponse.prototype.clearShowcaseRoyaltiesList = function() {
  return this.setShowcaseRoyaltiesList([]);
};

