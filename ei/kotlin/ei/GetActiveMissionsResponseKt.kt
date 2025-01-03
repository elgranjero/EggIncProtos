// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializegetActiveMissionsResponse")
public inline fun getActiveMissionsResponse(block: ei.GetActiveMissionsResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.GetActiveMissionsResponse =
  ei.GetActiveMissionsResponseKt.Dsl._create(ei.Ei.GetActiveMissionsResponse.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.GetActiveMissionsResponse`
 */
public object GetActiveMissionsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.GetActiveMissionsResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.GetActiveMissionsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.GetActiveMissionsResponse = _builder.build()

    /**
     * `optional bool success = 1;`
     */
    public var success: kotlin.Boolean
      @JvmName("getSuccess")
      get() = _builder.success
      @JvmName("setSuccess")
      set(value) {
        _builder.success = value
      }
    /**
     * `optional bool success = 1;`
     */
    public fun clearSuccess() {
      _builder.clearSuccess()
    }
    /**
     * `optional bool success = 1;`
     * @return Whether the success field is set.
     */
    public fun hasSuccess(): kotlin.Boolean {
      return _builder.hasSuccess()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ActiveMissionsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .ei.MissionInfo active_missions = 2;`
     */
     public val activeMissions: com.google.protobuf.kotlin.DslList<ei.Ei.MissionInfo, ActiveMissionsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.activeMissionsList
      )
    /**
     * `repeated .ei.MissionInfo active_missions = 2;`
     * @param value The activeMissions to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addActiveMissions")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.MissionInfo, ActiveMissionsProxy>.add(value: ei.Ei.MissionInfo) {
      _builder.addActiveMissions(value)
    }
    /**
     * `repeated .ei.MissionInfo active_missions = 2;`
     * @param value The activeMissions to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignActiveMissions")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.MissionInfo, ActiveMissionsProxy>.plusAssign(value: ei.Ei.MissionInfo) {
      add(value)
    }
    /**
     * `repeated .ei.MissionInfo active_missions = 2;`
     * @param values The activeMissions to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllActiveMissions")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.MissionInfo, ActiveMissionsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.MissionInfo>) {
      _builder.addAllActiveMissions(values)
    }
    /**
     * `repeated .ei.MissionInfo active_missions = 2;`
     * @param values The activeMissions to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllActiveMissions")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.MissionInfo, ActiveMissionsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.MissionInfo>) {
      addAll(values)
    }
    /**
     * `repeated .ei.MissionInfo active_missions = 2;`
     * @param index The index to set the value at.
     * @param value The activeMissions to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setActiveMissions")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.MissionInfo, ActiveMissionsProxy>.set(index: kotlin.Int, value: ei.Ei.MissionInfo) {
      _builder.setActiveMissions(index, value)
    }
    /**
     * `repeated .ei.MissionInfo active_missions = 2;`
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearActiveMissions")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.MissionInfo, ActiveMissionsProxy>.clear() {
      _builder.clearActiveMissions()
    }

  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.GetActiveMissionsResponse.copy(block: `ei`.GetActiveMissionsResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.GetActiveMissionsResponse =
  `ei`.GetActiveMissionsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

