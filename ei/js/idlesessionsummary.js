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

goog.provide('proto.ei.IdleSessionSummary');
goog.provide('proto.ei.IdleSessionSummary.Stat');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.ei.IdleSessionSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ei.IdleSessionSummary.repeatedFields_, null);
};
goog.inherits(proto.ei.IdleSessionSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.IdleSessionSummary.displayName = 'proto.ei.IdleSessionSummary';
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
proto.ei.IdleSessionSummary.Stat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.IdleSessionSummary.Stat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.IdleSessionSummary.Stat.displayName = 'proto.ei.IdleSessionSummary.Stat';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ei.IdleSessionSummary.repeatedFields_ = [10];



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
proto.ei.IdleSessionSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.IdleSessionSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.IdleSessionSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.IdleSessionSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
success: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
timeAway: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
timeSimulated: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
silosOwned: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
averageElr: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
averageMsr: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
averageEggDeliveryRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f,
lastEggDeliveryRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
eggsDelivered: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
statsList: jspb.Message.toObjectList(msg.getStatsList(),
    proto.ei.IdleSessionSummary.Stat.toObject, includeInstance),
farmIndex: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.ei.IdleSessionSummary}
 */
proto.ei.IdleSessionSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.IdleSessionSummary;
  return proto.ei.IdleSessionSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.IdleSessionSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.IdleSessionSummary}
 */
proto.ei.IdleSessionSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeAway(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeSimulated(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSilosOwned(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageElr(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageMsr(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageEggDeliveryRate(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLastEggDeliveryRate(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEggsDelivered(value);
      break;
    case 10:
      var value = new proto.ei.IdleSessionSummary.Stat;
      reader.readMessage(value,proto.ei.IdleSessionSummary.Stat.deserializeBinaryFromReader);
      msg.addStats(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFarmIndex(value);
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
proto.ei.IdleSessionSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.IdleSessionSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.IdleSessionSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.IdleSessionSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.ei.IdleSessionSummary.Stat.serializeBinaryToWriter
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
proto.ei.IdleSessionSummary.Stat.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.IdleSessionSummary.Stat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.IdleSessionSummary.Stat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.IdleSessionSummary.Stat.toObject = function(includeInstance, msg) {
  var f, obj = {
name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
min: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
max: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
avg: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
totalTime: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ei.IdleSessionSummary.Stat}
 */
proto.ei.IdleSessionSummary.Stat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.IdleSessionSummary.Stat;
  return proto.ei.IdleSessionSummary.Stat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.IdleSessionSummary.Stat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.IdleSessionSummary.Stat}
 */
proto.ei.IdleSessionSummary.Stat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMax(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAvg(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTotalTime(value);
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
proto.ei.IdleSessionSummary.Stat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.IdleSessionSummary.Stat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.IdleSessionSummary.Stat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.IdleSessionSummary.Stat.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeDouble(
      2,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ei.IdleSessionSummary.Stat.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.Stat.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double min = 2;
 * @return {number}
 */
proto.ei.IdleSessionSummary.Stat.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.setMin = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.clearMin = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.Stat.prototype.hasMin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double max = 3;
 * @return {number}
 */
proto.ei.IdleSessionSummary.Stat.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.setMax = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.clearMax = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.Stat.prototype.hasMax = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double avg = 4;
 * @return {number}
 */
proto.ei.IdleSessionSummary.Stat.prototype.getAvg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.setAvg = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.clearAvg = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.Stat.prototype.hasAvg = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double total_time = 5;
 * @return {number}
 */
proto.ei.IdleSessionSummary.Stat.prototype.getTotalTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.setTotalTime = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary.Stat} returns this
 */
proto.ei.IdleSessionSummary.Stat.prototype.clearTotalTime = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.Stat.prototype.hasTotalTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool success = 11;
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setSuccess = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearSuccess = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double time_away = 1;
 * @return {number}
 */
proto.ei.IdleSessionSummary.prototype.getTimeAway = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setTimeAway = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearTimeAway = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasTimeAway = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double time_simulated = 2;
 * @return {number}
 */
proto.ei.IdleSessionSummary.prototype.getTimeSimulated = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setTimeSimulated = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearTimeSimulated = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasTimeSimulated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 silos_owned = 3;
 * @return {number}
 */
proto.ei.IdleSessionSummary.prototype.getSilosOwned = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setSilosOwned = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearSilosOwned = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasSilosOwned = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double average_elr = 4;
 * @return {number}
 */
proto.ei.IdleSessionSummary.prototype.getAverageElr = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setAverageElr = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearAverageElr = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasAverageElr = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double average_msr = 5;
 * @return {number}
 */
proto.ei.IdleSessionSummary.prototype.getAverageMsr = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setAverageMsr = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearAverageMsr = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasAverageMsr = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double average_egg_delivery_rate = 6;
 * @return {number}
 */
proto.ei.IdleSessionSummary.prototype.getAverageEggDeliveryRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setAverageEggDeliveryRate = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearAverageEggDeliveryRate = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasAverageEggDeliveryRate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double last_egg_delivery_rate = 8;
 * @return {number}
 */
proto.ei.IdleSessionSummary.prototype.getLastEggDeliveryRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setLastEggDeliveryRate = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearLastEggDeliveryRate = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasLastEggDeliveryRate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double eggs_delivered = 9;
 * @return {number}
 */
proto.ei.IdleSessionSummary.prototype.getEggsDelivered = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setEggsDelivered = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearEggsDelivered = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasEggsDelivered = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Stat stats = 10;
 * @return {!Array<!proto.ei.IdleSessionSummary.Stat>}
 */
proto.ei.IdleSessionSummary.prototype.getStatsList = function() {
  return /** @type{!Array<!proto.ei.IdleSessionSummary.Stat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ei.IdleSessionSummary.Stat, 10));
};


/**
 * @param {!Array<!proto.ei.IdleSessionSummary.Stat>} value
 * @return {!proto.ei.IdleSessionSummary} returns this
*/
proto.ei.IdleSessionSummary.prototype.setStatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.ei.IdleSessionSummary.Stat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ei.IdleSessionSummary.Stat}
 */
proto.ei.IdleSessionSummary.prototype.addStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.ei.IdleSessionSummary.Stat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearStatsList = function() {
  return this.setStatsList([]);
};


/**
 * optional uint32 farm_index = 7;
 * @return {number}
 */
proto.ei.IdleSessionSummary.prototype.getFarmIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.setFarmIndex = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.IdleSessionSummary} returns this
 */
proto.ei.IdleSessionSummary.prototype.clearFarmIndex = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.IdleSessionSummary.prototype.hasFarmIndex = function() {
  return jspb.Message.getField(this, 7) != null;
};


