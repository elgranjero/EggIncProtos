// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializecompleteArtifact")
public inline fun completeArtifact(block: ei.CompleteArtifactKt.Dsl.() -> kotlin.Unit): ei.Ei.CompleteArtifact =
  ei.CompleteArtifactKt.Dsl._create(ei.Ei.CompleteArtifact.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.CompleteArtifact`
 */
public object CompleteArtifactKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.CompleteArtifact.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.CompleteArtifact.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.CompleteArtifact = _builder.build()

    /**
     * `optional .ei.ArtifactSpec spec = 1;`
     */
    public var spec: ei.Ei.ArtifactSpec
      @JvmName("getSpec")
      get() = _builder.spec
      @JvmName("setSpec")
      set(value) {
        _builder.spec = value
      }
    /**
     * `optional .ei.ArtifactSpec spec = 1;`
     */
    public fun clearSpec() {
      _builder.clearSpec()
    }
    /**
     * `optional .ei.ArtifactSpec spec = 1;`
     * @return Whether the spec field is set.
     */
    public fun hasSpec(): kotlin.Boolean {
      return _builder.hasSpec()
    }
    public val CompleteArtifactKt.Dsl.specOrNull: ei.Ei.ArtifactSpec?
      get() = _builder.specOrNull

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class StonesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .ei.ArtifactSpec stones = 2;`
     */
     public val stones: com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, StonesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.stonesList
      )
    /**
     * `repeated .ei.ArtifactSpec stones = 2;`
     * @param value The stones to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addStones")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, StonesProxy>.add(value: ei.Ei.ArtifactSpec) {
      _builder.addStones(value)
    }
    /**
     * `repeated .ei.ArtifactSpec stones = 2;`
     * @param value The stones to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignStones")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, StonesProxy>.plusAssign(value: ei.Ei.ArtifactSpec) {
      add(value)
    }
    /**
     * `repeated .ei.ArtifactSpec stones = 2;`
     * @param values The stones to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllStones")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, StonesProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ArtifactSpec>) {
      _builder.addAllStones(values)
    }
    /**
     * `repeated .ei.ArtifactSpec stones = 2;`
     * @param values The stones to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllStones")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, StonesProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ArtifactSpec>) {
      addAll(values)
    }
    /**
     * `repeated .ei.ArtifactSpec stones = 2;`
     * @param index The index to set the value at.
     * @param value The stones to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setStones")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, StonesProxy>.set(index: kotlin.Int, value: ei.Ei.ArtifactSpec) {
      _builder.setStones(index, value)
    }
    /**
     * `repeated .ei.ArtifactSpec stones = 2;`
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearStones")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, StonesProxy>.clear() {
      _builder.clearStones()
    }

  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.CompleteArtifact.copy(block: `ei`.CompleteArtifactKt.Dsl.() -> kotlin.Unit): ei.Ei.CompleteArtifact =
  `ei`.CompleteArtifactKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ei.Ei.CompleteArtifactOrBuilder.specOrNull: ei.Ei.ArtifactSpec?
  get() = if (hasSpec()) getSpec() else null
