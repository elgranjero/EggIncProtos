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

goog.provide('proto.ei.InGameMail');

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
proto.ei.InGameMail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ei.InGameMail.repeatedFields_, null);
};
goog.inherits(proto.ei.InGameMail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.InGameMail.displayName = 'proto.ei.InGameMail';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ei.InGameMail.repeatedFields_ = [9];



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
proto.ei.InGameMail.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.InGameMail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.InGameMail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.InGameMail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    title: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    date: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    message: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    action: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    url: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    platform: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    buildsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    minClientVersion: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    maxClientVersion: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    minSoulEggs: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
    minMysticalBonus: (f = jspb.Message.getOptionalFloatingPointField(msg, 13)) == null ? undefined : f,
    goldTip: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.ei.InGameMail}
 */
proto.ei.InGameMail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.InGameMail;
  return proto.ei.InGameMail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.InGameMail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.InGameMail}
 */
proto.ei.InGameMail.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPlatform(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addBuilds(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinClientVersion(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxClientVersion(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinSoulEggs(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinMysticalBonus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGoldTip(value);
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
proto.ei.InGameMail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.InGameMail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.InGameMail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.InGameMail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
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
  f = message.getBuildsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeUint32(
      10,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeDouble(
      13,
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
 * optional string id = 1;
 * @return {string}
 */
proto.ei.InGameMail.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.ei.InGameMail.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string date = 8;
 * @return {string}
 */
proto.ei.InGameMail.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setDate = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearDate = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasDate = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.ei.InGameMail.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string action = 4;
 * @return {string}
 */
proto.ei.InGameMail.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setAction = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearAction = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasAction = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.ei.InGameMail.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setUrl = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearUrl = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 platform = 7;
 * @return {number}
 */
proto.ei.InGameMail.prototype.getPlatform = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setPlatform = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearPlatform = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasPlatform = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string builds = 9;
 * @return {!Array<string>}
 */
proto.ei.InGameMail.prototype.getBuildsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setBuildsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.addBuilds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearBuildsList = function() {
  return this.setBuildsList([]);
};


/**
 * optional uint32 min_client_version = 10;
 * @return {number}
 */
proto.ei.InGameMail.prototype.getMinClientVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setMinClientVersion = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearMinClientVersion = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasMinClientVersion = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint32 max_client_version = 12;
 * @return {number}
 */
proto.ei.InGameMail.prototype.getMaxClientVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setMaxClientVersion = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearMaxClientVersion = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasMaxClientVersion = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional double min_soul_eggs = 11;
 * @return {number}
 */
proto.ei.InGameMail.prototype.getMinSoulEggs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setMinSoulEggs = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearMinSoulEggs = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasMinSoulEggs = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double min_mystical_bonus = 13;
 * @return {number}
 */
proto.ei.InGameMail.prototype.getMinMysticalBonus = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setMinMysticalBonus = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearMinMysticalBonus = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasMinMysticalBonus = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional double gold_tip = 6;
 * @return {number}
 */
proto.ei.InGameMail.prototype.getGoldTip = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.setGoldTip = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.InGameMail} returns this
 */
proto.ei.InGameMail.prototype.clearGoldTip = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.InGameMail.prototype.hasGoldTip = function() {
  return jspb.Message.getField(this, 6) != null;
};


