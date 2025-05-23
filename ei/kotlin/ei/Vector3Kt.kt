// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializevector3")
public inline fun vector3(block: ei.Vector3Kt.Dsl.() -> kotlin.Unit): ei.Ei.Vector3 =
  ei.Vector3Kt.Dsl._create(ei.Ei.Vector3.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.Vector3`
 */
public object Vector3Kt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.Vector3.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.Vector3.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.Vector3 = _builder.build()

    /**
     * `optional float x = 1;`
     */
    public var x: kotlin.Float
      @kotlin.jvm.JvmName("getX")
        get() = _builder.x
      @kotlin.jvm.JvmName("setX")
        set(value) {
        _builder.x = value
      }
    /**
     * <code>optional float x = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearX() {
      _builder.clearX()
    }
    /**
     * <code>optional float x = 1;</code>
     * @return Whether the x field is set.
     * @return This builder for chaining.
     */
    public fun hasX(): kotlin.Boolean {
      return _builder.hasX()
    }

    /**
     * `optional float y = 2;`
     */
    public var y: kotlin.Float
      @kotlin.jvm.JvmName("getY")
        get() = _builder.y
      @kotlin.jvm.JvmName("setY")
        set(value) {
        _builder.y = value
      }
    /**
     * <code>optional float y = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearY() {
      _builder.clearY()
    }
    /**
     * <code>optional float y = 2;</code>
     * @return Whether the y field is set.
     * @return This builder for chaining.
     */
    public fun hasY(): kotlin.Boolean {
      return _builder.hasY()
    }

    /**
     * `optional float z = 3;`
     */
    public var z: kotlin.Float
      @kotlin.jvm.JvmName("getZ")
        get() = _builder.z
      @kotlin.jvm.JvmName("setZ")
        set(value) {
        _builder.z = value
      }
    /**
     * <code>optional float z = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearZ() {
      _builder.clearZ()
    }
    /**
     * <code>optional float z = 3;</code>
     * @return Whether the z field is set.
     * @return This builder for chaining.
     */
    public fun hasZ(): kotlin.Boolean {
      return _builder.hasZ()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.Vector3.copy(block: `ei`.Vector3Kt.Dsl.() -> kotlin.Unit): ei.Ei.Vector3 =
  `ei`.Vector3Kt.Dsl._create(this.toBuilder()).apply { block() }._build()

