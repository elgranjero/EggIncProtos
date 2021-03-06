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

goog.provide('proto.ei.LocalContract');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.ei.Contract');

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
proto.ei.LocalContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.LocalContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.LocalContract.displayName = 'proto.ei.LocalContract';
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
proto.ei.LocalContract.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.LocalContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.LocalContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.LocalContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    contract: (f = msg.getContract()) && proto.ei.Contract.toObject(includeInstance, f),
    coopIdentifier: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    accepted: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
    timeAccepted: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    cancelled: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
    pb_new: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    coopSharedEndTime: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    coopGracePeriodEndTime: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    coopContributionFinalized: (f = jspb.Message.getBooleanField(msg, 10)) == null ? undefined : f,
    coopLastUploadedContribution: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
    coopUserId: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    coopShareFarm: (f = jspb.Message.getBooleanField(msg, 17)) == null ? undefined : f,
    lastAmountWhenRewardGiven: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
    numGoalsAchieved: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    boostsUsed: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    league: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    lastNagTime: (f = jspb.Message.getOptionalFloatingPointField(msg, 16)) == null ? undefined : f
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
 * @return {!proto.ei.LocalContract}
 */
proto.ei.LocalContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.LocalContract;
  return proto.ei.LocalContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.LocalContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.LocalContract}
 */
proto.ei.LocalContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ei.Contract;
      reader.readMessage(value,proto.ei.Contract.deserializeBinaryFromReader);
      msg.setContract(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCoopIdentifier(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccepted(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeAccepted(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelled(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNew(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCoopSharedEndTime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCoopGracePeriodEndTime(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCoopContributionFinalized(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCoopLastUploadedContribution(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCoopUserId(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCoopShareFarm(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastAmountWhenRewardGiven(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumGoalsAchieved(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBoostsUsed(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeague(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastNagTime(value);
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
proto.ei.LocalContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.LocalContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.LocalContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.LocalContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContract();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ei.Contract.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeBool(
      17,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeUint32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeDouble(
      16,
      f
    );
  }
};


/**
 * optional Contract contract = 1;
 * @return {?proto.ei.Contract}
 */
proto.ei.LocalContract.prototype.getContract = function() {
  return /** @type{?proto.ei.Contract} */ (
    jspb.Message.getWrapperField(this, proto.ei.Contract, 1));
};


/**
 * @param {?proto.ei.Contract|undefined} value
 * @return {!proto.ei.LocalContract} returns this
*/
proto.ei.LocalContract.prototype.setContract = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearContract = function() {
  return this.setContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasContract = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string coop_identifier = 2;
 * @return {string}
 */
proto.ei.LocalContract.prototype.getCoopIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setCoopIdentifier = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearCoopIdentifier = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasCoopIdentifier = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool accepted = 7;
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.getAccepted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setAccepted = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearAccepted = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasAccepted = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double time_accepted = 3;
 * @return {number}
 */
proto.ei.LocalContract.prototype.getTimeAccepted = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setTimeAccepted = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearTimeAccepted = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasTimeAccepted = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool cancelled = 4;
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.getCancelled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setCancelled = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearCancelled = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasCancelled = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool new = 8;
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.getNew = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setNew = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearNew = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasNew = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double coop_shared_end_time = 5;
 * @return {number}
 */
proto.ei.LocalContract.prototype.getCoopSharedEndTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setCoopSharedEndTime = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearCoopSharedEndTime = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasCoopSharedEndTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double coop_grace_period_end_time = 9;
 * @return {number}
 */
proto.ei.LocalContract.prototype.getCoopGracePeriodEndTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setCoopGracePeriodEndTime = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearCoopGracePeriodEndTime = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasCoopGracePeriodEndTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool coop_contribution_finalized = 10;
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.getCoopContributionFinalized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setCoopContributionFinalized = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearCoopContributionFinalized = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasCoopContributionFinalized = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double coop_last_uploaded_contribution = 11;
 * @return {number}
 */
proto.ei.LocalContract.prototype.getCoopLastUploadedContribution = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setCoopLastUploadedContribution = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearCoopLastUploadedContribution = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasCoopLastUploadedContribution = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string coop_user_id = 13;
 * @return {string}
 */
proto.ei.LocalContract.prototype.getCoopUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setCoopUserId = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearCoopUserId = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasCoopUserId = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool coop_share_farm = 17;
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.getCoopShareFarm = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setCoopShareFarm = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearCoopShareFarm = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasCoopShareFarm = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional double last_amount_when_reward_given = 6;
 * @return {number}
 */
proto.ei.LocalContract.prototype.getLastAmountWhenRewardGiven = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setLastAmountWhenRewardGiven = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearLastAmountWhenRewardGiven = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasLastAmountWhenRewardGiven = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 num_goals_achieved = 14;
 * @return {number}
 */
proto.ei.LocalContract.prototype.getNumGoalsAchieved = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setNumGoalsAchieved = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearNumGoalsAchieved = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasNumGoalsAchieved = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional uint32 boosts_used = 12;
 * @return {number}
 */
proto.ei.LocalContract.prototype.getBoostsUsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setBoostsUsed = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearBoostsUsed = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasBoostsUsed = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional uint32 league = 15;
 * @return {number}
 */
proto.ei.LocalContract.prototype.getLeague = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setLeague = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearLeague = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasLeague = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double last_nag_time = 16;
 * @return {number}
 */
proto.ei.LocalContract.prototype.getLastNagTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.setLastNagTime = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.LocalContract} returns this
 */
proto.ei.LocalContract.prototype.clearLastNagTime = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.LocalContract.prototype.hasLastNagTime = function() {
  return jspb.Message.getField(this, 16) != null;
};


