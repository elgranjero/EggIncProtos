// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializejoinCoopResponse")
public inline fun joinCoopResponse(block: ei.JoinCoopResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.JoinCoopResponse =
  ei.JoinCoopResponseKt.Dsl._create(ei.Ei.JoinCoopResponse.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.JoinCoopResponse`
 */
public object JoinCoopResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.JoinCoopResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.JoinCoopResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.JoinCoopResponse = _builder.build()

    /**
     * `optional bool success = 1;`
     */
    public var success: kotlin.Boolean
      @kotlin.jvm.JvmName("getSuccess")
        get() = _builder.success
      @kotlin.jvm.JvmName("setSuccess")
        set(value) {
        _builder.success = value
      }
    /**
     * <code>optional bool success = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearSuccess() {
      _builder.clearSuccess()
    }
    /**
     * <code>optional bool success = 1;</code>
     * @return Whether the success field is set.
     * @return This builder for chaining.
     */
    public fun hasSuccess(): kotlin.Boolean {
      return _builder.hasSuccess()
    }

    /**
     * `optional string message = 2;`
     */
    public var message: kotlin.String
      @kotlin.jvm.JvmName("getMessage")
        get() = _builder.message
      @kotlin.jvm.JvmName("setMessage")
        set(value) {
        _builder.message = value
      }
    /**
     * <code>optional string message = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearMessage() {
      _builder.clearMessage()
    }
    /**
     * <code>optional string message = 2;</code>
     * @return Whether the message field is set.
     * @return This builder for chaining.
     */
    public fun hasMessage(): kotlin.Boolean {
      return _builder.hasMessage()
    }

    /**
     * `optional bool banned = 4;`
     */
    public var banned: kotlin.Boolean
      @kotlin.jvm.JvmName("getBanned")
        get() = _builder.banned
      @kotlin.jvm.JvmName("setBanned")
        set(value) {
        _builder.banned = value
      }
    /**
     * <code>optional bool banned = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearBanned() {
      _builder.clearBanned()
    }
    /**
     * <code>optional bool banned = 4;</code>
     * @return Whether the banned field is set.
     * @return This builder for chaining.
     */
    public fun hasBanned(): kotlin.Boolean {
      return _builder.hasBanned()
    }

    /**
     * `optional string coop_identifier = 5;`
     */
    public var coopIdentifier: kotlin.String
      @kotlin.jvm.JvmName("getCoopIdentifier")
        get() = _builder.coopIdentifier
      @kotlin.jvm.JvmName("setCoopIdentifier")
        set(value) {
        _builder.coopIdentifier = value
      }
    /**
     * <code>optional string coop_identifier = 5;</code>
     * @return This builder for chaining.
     */
    public fun clearCoopIdentifier() {
      _builder.clearCoopIdentifier()
    }
    /**
     * <code>optional string coop_identifier = 5;</code>
     * @return Whether the coopIdentifier field is set.
     * @return This builder for chaining.
     */
    public fun hasCoopIdentifier(): kotlin.Boolean {
      return _builder.hasCoopIdentifier()
    }

    /**
     * `optional double seconds_remaining = 3;`
     */
    public var secondsRemaining: kotlin.Double
      @kotlin.jvm.JvmName("getSecondsRemaining")
        get() = _builder.secondsRemaining
      @kotlin.jvm.JvmName("setSecondsRemaining")
        set(value) {
        _builder.secondsRemaining = value
      }
    /**
     * <code>optional double seconds_remaining = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearSecondsRemaining() {
      _builder.clearSecondsRemaining()
    }
    /**
     * <code>optional double seconds_remaining = 3;</code>
     * @return Whether the secondsRemaining field is set.
     * @return This builder for chaining.
     */
    public fun hasSecondsRemaining(): kotlin.Boolean {
      return _builder.hasSecondsRemaining()
    }

    /**
     * `optional double match_percent = 6;`
     */
    public var matchPercent: kotlin.Double
      @kotlin.jvm.JvmName("getMatchPercent")
        get() = _builder.matchPercent
      @kotlin.jvm.JvmName("setMatchPercent")
        set(value) {
        _builder.matchPercent = value
      }
    /**
     * <code>optional double match_percent = 6;</code>
     * @return This builder for chaining.
     */
    public fun clearMatchPercent() {
      _builder.clearMatchPercent()
    }
    /**
     * <code>optional double match_percent = 6;</code>
     * @return Whether the matchPercent field is set.
     * @return This builder for chaining.
     */
    public fun hasMatchPercent(): kotlin.Boolean {
      return _builder.hasMatchPercent()
    }

    /**
     * `optional uint32 num_members = 7;`
     */
    public var numMembers: kotlin.Int
      @kotlin.jvm.JvmName("getNumMembers")
        get() = _builder.numMembers
      @kotlin.jvm.JvmName("setNumMembers")
        set(value) {
        _builder.numMembers = value
      }
    /**
     * <code>optional uint32 num_members = 7;</code>
     * @return This builder for chaining.
     */
    public fun clearNumMembers() {
      _builder.clearNumMembers()
    }
    /**
     * <code>optional uint32 num_members = 7;</code>
     * @return Whether the numMembers field is set.
     * @return This builder for chaining.
     */
    public fun hasNumMembers(): kotlin.Boolean {
      return _builder.hasNumMembers()
    }

    /**
     * `optional .ei.ContractCoopStatusResponse.Status status = 8;`
     */
    public var status: ei.Ei.ContractCoopStatusResponse.Status
      @kotlin.jvm.JvmName("getStatus")
        get() = _builder.status
      @kotlin.jvm.JvmName("setStatus")
        set(value) {
        _builder.status = value
      }
    /**
     * <code>optional .ei.ContractCoopStatusResponse.Status status = 8;</code>
     * @return This builder for chaining.
     */
    public fun clearStatus() {
      _builder.clearStatus()
    }
    /**
     * <code>optional .ei.ContractCoopStatusResponse.Status status = 8;</code>
     * @return Whether the status field is set.
     * @return This builder for chaining.
     */
    public fun hasStatus(): kotlin.Boolean {
      return _builder.hasStatus()
    }

    /**
     * `optional .ei.Contract.PlayerGrade grade = 9;`
     */
    public var grade: ei.Ei.Contract.PlayerGrade
      @kotlin.jvm.JvmName("getGrade")
        get() = _builder.grade
      @kotlin.jvm.JvmName("setGrade")
        set(value) {
        _builder.grade = value
      }
    /**
     * <code>optional .ei.Contract.PlayerGrade grade = 9;</code>
     * @return This builder for chaining.
     */
    public fun clearGrade() {
      _builder.clearGrade()
    }
    /**
     * <code>optional .ei.Contract.PlayerGrade grade = 9;</code>
     * @return Whether the grade field is set.
     * @return This builder for chaining.
     */
    public fun hasGrade(): kotlin.Boolean {
      return _builder.hasGrade()
    }

    /**
     * `optional bool can_start = 10;`
     */
    public var canStart: kotlin.Boolean
      @kotlin.jvm.JvmName("getCanStart")
        get() = _builder.canStart
      @kotlin.jvm.JvmName("setCanStart")
        set(value) {
        _builder.canStart = value
      }
    /**
     * <code>optional bool can_start = 10;</code>
     * @return This builder for chaining.
     */
    public fun clearCanStart() {
      _builder.clearCanStart()
    }
    /**
     * <code>optional bool can_start = 10;</code>
     * @return Whether the canStart field is set.
     * @return This builder for chaining.
     */
    public fun hasCanStart(): kotlin.Boolean {
      return _builder.hasCanStart()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.JoinCoopResponse.copy(block: `ei`.JoinCoopResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.JoinCoopResponse =
  `ei`.JoinCoopResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

