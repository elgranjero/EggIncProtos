//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmName("-initializemailState")
public inline fun mailState(block: ei.MailStateKt.Dsl.() -> kotlin.Unit): ei.Ei.MailState =
  ei.MailStateKt.Dsl._create(ei.Ei.MailState.newBuilder()).apply { block() }._build()
public object MailStateKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.MailState.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.MailState.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.MailState = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ReadMailIdsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated string read_mail_ids = 1;</code>
     * @return A list containing the readMailIds.
     */
    public val readMailIds: com.google.protobuf.kotlin.DslList<kotlin.String, ReadMailIdsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getReadMailIdsList()
      )
    /**
     * <code>repeated string read_mail_ids = 1;</code>
     * @param value The readMailIds to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addReadMailIds")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, ReadMailIdsProxy>.add(value: kotlin.String) {
      _builder.addReadMailIds(value)
    }
    /**
     * <code>repeated string read_mail_ids = 1;</code>
     * @param value The readMailIds to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignReadMailIds")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, ReadMailIdsProxy>.plusAssign(value: kotlin.String) {
      add(value)
    }
    /**
     * <code>repeated string read_mail_ids = 1;</code>
     * @param values The readMailIds to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllReadMailIds")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, ReadMailIdsProxy>.addAll(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllReadMailIds(values)
    }
    /**
     * <code>repeated string read_mail_ids = 1;</code>
     * @param values The readMailIds to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllReadMailIds")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, ReadMailIdsProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.String>) {
      addAll(values)
    }
    /**
     * <code>repeated string read_mail_ids = 1;</code>
     * @param index The index to set the value at.
     * @param value The readMailIds to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setReadMailIds")
    public operator fun com.google.protobuf.kotlin.DslList<kotlin.String, ReadMailIdsProxy>.set(index: kotlin.Int, value: kotlin.String) {
      _builder.setReadMailIds(index, value)
    }/**
     * <code>repeated string read_mail_ids = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearReadMailIds")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, ReadMailIdsProxy>.clear() {
      _builder.clearReadMailIds()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class TipsStatesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.MailState.TipState tips_states = 2;</code>
     */
     public val tipsStates: com.google.protobuf.kotlin.DslList<ei.Ei.MailState.TipState, TipsStatesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getTipsStatesList()
      )
    /**
     * <code>repeated .ei.MailState.TipState tips_states = 2;</code>
     * @param value The tipsStates to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addTipsStates")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.MailState.TipState, TipsStatesProxy>.add(value: ei.Ei.MailState.TipState) {
      _builder.addTipsStates(value)
    }
    /**
     * <code>repeated .ei.MailState.TipState tips_states = 2;</code>
     * @param value The tipsStates to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignTipsStates")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.MailState.TipState, TipsStatesProxy>.plusAssign(value: ei.Ei.MailState.TipState) {
      add(value)
    }
    /**
     * <code>repeated .ei.MailState.TipState tips_states = 2;</code>
     * @param values The tipsStates to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllTipsStates")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.MailState.TipState, TipsStatesProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.MailState.TipState>) {
      _builder.addAllTipsStates(values)
    }
    /**
     * <code>repeated .ei.MailState.TipState tips_states = 2;</code>
     * @param values The tipsStates to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllTipsStates")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.MailState.TipState, TipsStatesProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.MailState.TipState>) {
      addAll(values)
    }
    /**
     * <code>repeated .ei.MailState.TipState tips_states = 2;</code>
     * @param index The index to set the value at.
     * @param value The tipsStates to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setTipsStates")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.MailState.TipState, TipsStatesProxy>.set(index: kotlin.Int, value: ei.Ei.MailState.TipState) {
      _builder.setTipsStates(index, value)
    }
    /**
     * <code>repeated .ei.MailState.TipState tips_states = 2;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearTipsStates")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.MailState.TipState, TipsStatesProxy>.clear() {
      _builder.clearTipsStates()
    }


    /**
     * <code>optional string tips_checksum = 3;</code>
     */
    public var tipsChecksum: kotlin.String
      @JvmName("getTipsChecksum")
      get() = _builder.getTipsChecksum()
      @JvmName("setTipsChecksum")
      set(value) {
        _builder.setTipsChecksum(value)
      }
    /**
     * <code>optional string tips_checksum = 3;</code>
     */
    public fun clearTipsChecksum() {
      _builder.clearTipsChecksum()
    }
    /**
     * <code>optional string tips_checksum = 3;</code>
     * @return Whether the tipsChecksum field is set.
     */
    public fun hasTipsChecksum(): kotlin.Boolean {
      return _builder.hasTipsChecksum()
    }
  }
  @kotlin.jvm.JvmName("-initializetipState")
  public inline fun tipState(block: ei.MailStateKt.TipStateKt.Dsl.() -> kotlin.Unit): ei.Ei.MailState.TipState =
    ei.MailStateKt.TipStateKt.Dsl._create(ei.Ei.MailState.TipState.newBuilder()).apply { block() }._build()
  public object TipStateKt {
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    @com.google.protobuf.kotlin.ProtoDslMarker
    public class Dsl private constructor(
      private val _builder: ei.Ei.MailState.TipState.Builder
    ) {
      public companion object {
        @kotlin.jvm.JvmSynthetic
        @kotlin.PublishedApi
        internal fun _create(builder: ei.Ei.MailState.TipState.Builder): Dsl = Dsl(builder)
      }

      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _build(): ei.Ei.MailState.TipState = _builder.build()

      /**
       * <code>optional string id = 1;</code>
       */
      public var id: kotlin.String
        @JvmName("getId")
        get() = _builder.getId()
        @JvmName("setId")
        set(value) {
          _builder.setId(value)
        }
      /**
       * <code>optional string id = 1;</code>
       */
      public fun clearId() {
        _builder.clearId()
      }
      /**
       * <code>optional string id = 1;</code>
       * @return Whether the id field is set.
       */
      public fun hasId(): kotlin.Boolean {
        return _builder.hasId()
      }

      /**
       * <code>optional uint32 reads = 2;</code>
       */
      public var reads: kotlin.Int
        @JvmName("getReads")
        get() = _builder.getReads()
        @JvmName("setReads")
        set(value) {
          _builder.setReads(value)
        }
      /**
       * <code>optional uint32 reads = 2;</code>
       */
      public fun clearReads() {
        _builder.clearReads()
      }
      /**
       * <code>optional uint32 reads = 2;</code>
       * @return Whether the reads field is set.
       */
      public fun hasReads(): kotlin.Boolean {
        return _builder.hasReads()
      }

      /**
       * <code>optional double time_read = 3;</code>
       */
      public var timeRead: kotlin.Double
        @JvmName("getTimeRead")
        get() = _builder.getTimeRead()
        @JvmName("setTimeRead")
        set(value) {
          _builder.setTimeRead(value)
        }
      /**
       * <code>optional double time_read = 3;</code>
       */
      public fun clearTimeRead() {
        _builder.clearTimeRead()
      }
      /**
       * <code>optional double time_read = 3;</code>
       * @return Whether the timeRead field is set.
       */
      public fun hasTimeRead(): kotlin.Boolean {
        return _builder.hasTimeRead()
      }
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.MailState.copy(block: ei.MailStateKt.Dsl.() -> kotlin.Unit): ei.Ei.MailState =
  ei.MailStateKt.Dsl._create(this.toBuilder()).apply { block() }._build()

@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.MailState.TipState.copy(block: ei.MailStateKt.TipStateKt.Dsl.() -> kotlin.Unit): ei.Ei.MailState.TipState =
  ei.MailStateKt.TipStateKt.Dsl._create(this.toBuilder()).apply { block() }._build()
