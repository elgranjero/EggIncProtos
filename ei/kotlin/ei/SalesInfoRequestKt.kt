//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmName("-initializesalesInfoRequest")
public inline fun salesInfoRequest(block: ei.SalesInfoRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.SalesInfoRequest =
  ei.SalesInfoRequestKt.Dsl._create(ei.Ei.SalesInfoRequest.newBuilder()).apply { block() }._build()
public object SalesInfoRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.SalesInfoRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.SalesInfoRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.SalesInfoRequest = _builder.build()

    /**
     * <code>optional string user_id = 1;</code>
     */
    public var userId: kotlin.String
      @JvmName("getUserId")
      get() = _builder.getUserId()
      @JvmName("setUserId")
      set(value) {
        _builder.setUserId(value)
      }
    /**
     * <code>optional string user_id = 1;</code>
     */
    public fun clearUserId() {
      _builder.clearUserId()
    }
    /**
     * <code>optional string user_id = 1;</code>
     * @return Whether the userId field is set.
     */
    public fun hasUserId(): kotlin.Boolean {
      return _builder.hasUserId()
    }

    /**
     * <code>optional bool piggy_full = 2;</code>
     */
    public var piggyFull: kotlin.Boolean
      @JvmName("getPiggyFull")
      get() = _builder.getPiggyFull()
      @JvmName("setPiggyFull")
      set(value) {
        _builder.setPiggyFull(value)
      }
    /**
     * <code>optional bool piggy_full = 2;</code>
     */
    public fun clearPiggyFull() {
      _builder.clearPiggyFull()
    }
    /**
     * <code>optional bool piggy_full = 2;</code>
     * @return Whether the piggyFull field is set.
     */
    public fun hasPiggyFull(): kotlin.Boolean {
      return _builder.hasPiggyFull()
    }

    /**
     * <code>optional bool piggy_found_full = 3;</code>
     */
    public var piggyFoundFull: kotlin.Boolean
      @JvmName("getPiggyFoundFull")
      get() = _builder.getPiggyFoundFull()
      @JvmName("setPiggyFoundFull")
      set(value) {
        _builder.setPiggyFoundFull(value)
      }
    /**
     * <code>optional bool piggy_found_full = 3;</code>
     */
    public fun clearPiggyFoundFull() {
      _builder.clearPiggyFoundFull()
    }
    /**
     * <code>optional bool piggy_found_full = 3;</code>
     * @return Whether the piggyFoundFull field is set.
     */
    public fun hasPiggyFoundFull(): kotlin.Boolean {
      return _builder.hasPiggyFoundFull()
    }

    /**
     * <code>optional double seconds_full_realtime = 4;</code>
     */
    public var secondsFullRealtime: kotlin.Double
      @JvmName("getSecondsFullRealtime")
      get() = _builder.getSecondsFullRealtime()
      @JvmName("setSecondsFullRealtime")
      set(value) {
        _builder.setSecondsFullRealtime(value)
      }
    /**
     * <code>optional double seconds_full_realtime = 4;</code>
     */
    public fun clearSecondsFullRealtime() {
      _builder.clearSecondsFullRealtime()
    }
    /**
     * <code>optional double seconds_full_realtime = 4;</code>
     * @return Whether the secondsFullRealtime field is set.
     */
    public fun hasSecondsFullRealtime(): kotlin.Boolean {
      return _builder.hasSecondsFullRealtime()
    }

    /**
     * <code>optional double seconds_full_gametime = 5;</code>
     */
    public var secondsFullGametime: kotlin.Double
      @JvmName("getSecondsFullGametime")
      get() = _builder.getSecondsFullGametime()
      @JvmName("setSecondsFullGametime")
      set(value) {
        _builder.setSecondsFullGametime(value)
      }
    /**
     * <code>optional double seconds_full_gametime = 5;</code>
     */
    public fun clearSecondsFullGametime() {
      _builder.clearSecondsFullGametime()
    }
    /**
     * <code>optional double seconds_full_gametime = 5;</code>
     * @return Whether the secondsFullGametime field is set.
     */
    public fun hasSecondsFullGametime(): kotlin.Boolean {
      return _builder.hasSecondsFullGametime()
    }

    /**
     * <code>optional uint32 lost_increments = 7;</code>
     */
    public var lostIncrements: kotlin.Int
      @JvmName("getLostIncrements")
      get() = _builder.getLostIncrements()
      @JvmName("setLostIncrements")
      set(value) {
        _builder.setLostIncrements(value)
      }
    /**
     * <code>optional uint32 lost_increments = 7;</code>
     */
    public fun clearLostIncrements() {
      _builder.clearLostIncrements()
    }
    /**
     * <code>optional uint32 lost_increments = 7;</code>
     * @return Whether the lostIncrements field is set.
     */
    public fun hasLostIncrements(): kotlin.Boolean {
      return _builder.hasLostIncrements()
    }

    /**
     * <code>optional uint32 current_client_version = 10;</code>
     */
    public var currentClientVersion: kotlin.Int
      @JvmName("getCurrentClientVersion")
      get() = _builder.getCurrentClientVersion()
      @JvmName("setCurrentClientVersion")
      set(value) {
        _builder.setCurrentClientVersion(value)
      }
    /**
     * <code>optional uint32 current_client_version = 10;</code>
     */
    public fun clearCurrentClientVersion() {
      _builder.clearCurrentClientVersion()
    }
    /**
     * <code>optional uint32 current_client_version = 10;</code>
     * @return Whether the currentClientVersion field is set.
     */
    public fun hasCurrentClientVersion(): kotlin.Boolean {
      return _builder.hasCurrentClientVersion()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.SalesInfoRequest.copy(block: ei.SalesInfoRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.SalesInfoRequest =
  ei.SalesInfoRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

