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

goog.provide('proto.ei.ShellSetSpec');

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
proto.ei.ShellSetSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ei.ShellSetSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ei.ShellSetSpec.displayName = 'proto.ei.ShellSetSpec';
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
proto.ei.ShellSetSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.ei.ShellSetSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ei.ShellSetSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ShellSetSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    identifier: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    name: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    price: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    requiredEop: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    requiredSoulEggs: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ei.ShellSetSpec}
 */
proto.ei.ShellSetSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ei.ShellSetSpec;
  return proto.ei.ShellSetSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ei.ShellSetSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ei.ShellSetSpec}
 */
proto.ei.ShellSetSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifier(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRequiredEop(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRequiredSoulEggs(value);
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
proto.ei.ShellSetSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ei.ShellSetSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ei.ShellSetSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ei.ShellSetSpec.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional string identifier = 1;
 * @return {string}
 */
proto.ei.ShellSetSpec.prototype.getIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.setIdentifier = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.clearIdentifier = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellSetSpec.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ei.ShellSetSpec.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellSetSpec.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 price = 3;
 * @return {number}
 */
proto.ei.ShellSetSpec.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.setPrice = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.clearPrice = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellSetSpec.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 required_eop = 4;
 * @return {number}
 */
proto.ei.ShellSetSpec.prototype.getRequiredEop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.setRequiredEop = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.clearRequiredEop = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellSetSpec.prototype.hasRequiredEop = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double required_soul_eggs = 5;
 * @return {number}
 */
proto.ei.ShellSetSpec.prototype.getRequiredSoulEggs = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.setRequiredSoulEggs = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ei.ShellSetSpec} returns this
 */
proto.ei.ShellSetSpec.prototype.clearRequiredSoulEggs = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ei.ShellSetSpec.prototype.hasRequiredSoulEggs = function() {
  return jspb.Message.getField(this, 5) != null;
};

