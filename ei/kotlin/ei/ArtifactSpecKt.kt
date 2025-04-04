// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializeartifactSpec")
public inline fun artifactSpec(block: ei.ArtifactSpecKt.Dsl.() -> kotlin.Unit): ei.Ei.ArtifactSpec =
  ei.ArtifactSpecKt.Dsl._create(ei.Ei.ArtifactSpec.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.ArtifactSpec`
 */
public object ArtifactSpecKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.ArtifactSpec.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.ArtifactSpec.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.ArtifactSpec = _builder.build()

    /**
     * `optional .ei.ArtifactSpec.Name name = 1;`
     */
    public var name: ei.Ei.ArtifactSpec.Name
      @kotlin.jvm.JvmName("getName")
        get() = _builder.name
      @kotlin.jvm.JvmName("setName")
        set(value) {
        _builder.name = value
      }
    /**
     * <code>optional .ei.ArtifactSpec.Name name = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearName() {
      _builder.clearName()
    }
    /**
     * <code>optional .ei.ArtifactSpec.Name name = 1;</code>
     * @return Whether the name field is set.
     * @return This builder for chaining.
     */
    public fun hasName(): kotlin.Boolean {
      return _builder.hasName()
    }

    /**
     * `optional .ei.ArtifactSpec.Level level = 2;`
     */
    public var level: ei.Ei.ArtifactSpec.Level
      @kotlin.jvm.JvmName("getLevel")
        get() = _builder.level
      @kotlin.jvm.JvmName("setLevel")
        set(value) {
        _builder.level = value
      }
    /**
     * <code>optional .ei.ArtifactSpec.Level level = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearLevel() {
      _builder.clearLevel()
    }
    /**
     * <code>optional .ei.ArtifactSpec.Level level = 2;</code>
     * @return Whether the level field is set.
     * @return This builder for chaining.
     */
    public fun hasLevel(): kotlin.Boolean {
      return _builder.hasLevel()
    }

    /**
     * `optional .ei.ArtifactSpec.Rarity rarity = 3;`
     */
    public var rarity: ei.Ei.ArtifactSpec.Rarity
      @kotlin.jvm.JvmName("getRarity")
        get() = _builder.rarity
      @kotlin.jvm.JvmName("setRarity")
        set(value) {
        _builder.rarity = value
      }
    /**
     * <code>optional .ei.ArtifactSpec.Rarity rarity = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearRarity() {
      _builder.clearRarity()
    }
    /**
     * <code>optional .ei.ArtifactSpec.Rarity rarity = 3;</code>
     * @return Whether the rarity field is set.
     * @return This builder for chaining.
     */
    public fun hasRarity(): kotlin.Boolean {
      return _builder.hasRarity()
    }

    /**
     * `optional .ei.Egg egg = 4;`
     */
    public var egg: ei.Ei.Egg
      @kotlin.jvm.JvmName("getEgg")
        get() = _builder.egg
      @kotlin.jvm.JvmName("setEgg")
        set(value) {
        _builder.egg = value
      }
    /**
     * <code>optional .ei.Egg egg = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearEgg() {
      _builder.clearEgg()
    }
    /**
     * <code>optional .ei.Egg egg = 4;</code>
     * @return Whether the egg field is set.
     * @return This builder for chaining.
     */
    public fun hasEgg(): kotlin.Boolean {
      return _builder.hasEgg()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ArtifactSpec.copy(block: `ei`.ArtifactSpecKt.Dsl.() -> kotlin.Unit): ei.Ei.ArtifactSpec =
  `ei`.ArtifactSpecKt.Dsl._create(this.toBuilder()).apply { block() }._build()

