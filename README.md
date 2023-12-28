# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [ei/ei.proto](#ei_ei-proto)
    - [AccountTransferPayload](#ei-AccountTransferPayload)
    - [ActionKeyValuePair](#ei-ActionKeyValuePair)
    - [AdAttributionInfo](#ei-AdAttributionInfo)
    - [AdAttributionRawData](#ei-AdAttributionRawData)
    - [AdAttributionRow](#ei-AdAttributionRow)
    - [AppInfo](#ei-AppInfo)
    - [ArtifactInventoryItem](#ei-ArtifactInventoryItem)
    - [ArtifactSpec](#ei-ArtifactSpec)
    - [ArtifactsClientInfo](#ei-ArtifactsClientInfo)
    - [ArtifactsClientInfo.LaunchCount](#ei-ArtifactsClientInfo-LaunchCount)
    - [ArtifactsConfigurationRequest](#ei-ArtifactsConfigurationRequest)
    - [ArtifactsConfigurationResponse](#ei-ArtifactsConfigurationResponse)
    - [ArtifactsConfigurationResponse.ArtifactParameters](#ei-ArtifactsConfigurationResponse-ArtifactParameters)
    - [ArtifactsConfigurationResponse.CraftingLevelInfo](#ei-ArtifactsConfigurationResponse-CraftingLevelInfo)
    - [ArtifactsConfigurationResponse.MissionParameters](#ei-ArtifactsConfigurationResponse-MissionParameters)
    - [ArtifactsConfigurationResponse.MissionParameters.Duration](#ei-ArtifactsConfigurationResponse-MissionParameters-Duration)
    - [ArtifactsDB](#ei-ArtifactsDB)
    - [ArtifactsDB.ActiveArtifactSet](#ei-ArtifactsDB-ActiveArtifactSet)
    - [ArtifactsDB.ActiveArtifactSlot](#ei-ArtifactsDB-ActiveArtifactSlot)
    - [ArtifactsDB.CraftableArtifact](#ei-ArtifactsDB-CraftableArtifact)
    - [AuthenticateArtifactResponse](#ei-AuthenticateArtifactResponse)
    - [AuthenticatedMessage](#ei-AuthenticatedMessage)
    - [AutoJoinCoopRequest](#ei-AutoJoinCoopRequest)
    - [Backup](#ei-Backup)
    - [Backup.AchievementInfo](#ei-Backup-AchievementInfo)
    - [Backup.ActiveBoost](#ei-Backup-ActiveBoost)
    - [Backup.Artifacts](#ei-Backup-Artifacts)
    - [Backup.Game](#ei-Backup-Game)
    - [Backup.Misc](#ei-Backup-Misc)
    - [Backup.Mission](#ei-Backup-Mission)
    - [Backup.MissionInfo](#ei-Backup-MissionInfo)
    - [Backup.NewsHeadline](#ei-Backup-NewsHeadline)
    - [Backup.OwnedBoost](#ei-Backup-OwnedBoost)
    - [Backup.ResearchItem](#ei-Backup-ResearchItem)
    - [Backup.Settings](#ei-Backup-Settings)
    - [Backup.Shells](#ei-Backup-Shells)
    - [Backup.Simulation](#ei-Backup-Simulation)
    - [Backup.Stats](#ei-Backup-Stats)
    - [Backup.Tutorial](#ei-Backup-Tutorial)
    - [BasicRequestInfo](#ei-BasicRequestInfo)
    - [CXPEvalRolloutInfo](#ei-CXPEvalRolloutInfo)
    - [CleanAccountRequest](#ei-CleanAccountRequest)
    - [ClearAllUserDataRequest](#ei-ClearAllUserDataRequest)
    - [CollectContractArtifactRewardsRequest](#ei-CollectContractArtifactRewardsRequest)
    - [CompleteArtifact](#ei-CompleteArtifact)
    - [CompleteMissionResponse](#ei-CompleteMissionResponse)
    - [CompleteMissionResponse.SecureArtifactSpec](#ei-CompleteMissionResponse-SecureArtifactSpec)
    - [ConfigRequest](#ei-ConfigRequest)
    - [ConfigResponse](#ei-ConfigResponse)
    - [ConsumeArtifactRequest](#ei-ConsumeArtifactRequest)
    - [ConsumeArtifactResponse](#ei-ConsumeArtifactResponse)
    - [Contract](#ei-Contract)
    - [Contract.Goal](#ei-Contract-Goal)
    - [Contract.GoalSet](#ei-Contract-GoalSet)
    - [Contract.GradeSpec](#ei-Contract-GradeSpec)
    - [ContractAction](#ei-ContractAction)
    - [ContractCitation](#ei-ContractCitation)
    - [ContractCoopStatusRequest](#ei-ContractCoopStatusRequest)
    - [ContractCoopStatusResponse](#ei-ContractCoopStatusResponse)
    - [ContractCoopStatusResponse.ChickenRun](#ei-ContractCoopStatusResponse-ChickenRun)
    - [ContractCoopStatusResponse.ContributionInfo](#ei-ContractCoopStatusResponse-ContributionInfo)
    - [ContractCoopStatusResponse.CoopGift](#ei-ContractCoopStatusResponse-CoopGift)
    - [ContractCoopStatusUpdateRequest](#ei-ContractCoopStatusUpdateRequest)
    - [ContractCoopStatusUpdateResponse](#ei-ContractCoopStatusUpdateResponse)
    - [ContractEvaluation](#ei-ContractEvaluation)
    - [ContractEvaluationBatch](#ei-ContractEvaluationBatch)
    - [ContractEvaluationBatch.Pair](#ei-ContractEvaluationBatch-Pair)
    - [ContractPlayerInfo](#ei-ContractPlayerInfo)
    - [ContractSimConfig](#ei-ContractSimConfig)
    - [ContractSimConfig.ContractGradeSimConfig](#ei-ContractSimConfig-ContractGradeSimConfig)
    - [ContractSimConfig.ContractGradeSimConfig.GoalParams](#ei-ContractSimConfig-ContractGradeSimConfig-GoalParams)
    - [ContractSimPoll](#ei-ContractSimPoll)
    - [ContractSimPollResponse](#ei-ContractSimPollResponse)
    - [ContractSimResultUpdate](#ei-ContractSimResultUpdate)
    - [ContractSimResultUpdate.GoalInfo](#ei-ContractSimResultUpdate-GoalInfo)
    - [ContractsArchive](#ei-ContractsArchive)
    - [ContractsRequest](#ei-ContractsRequest)
    - [ContractsResponse](#ei-ContractsResponse)
    - [CoopBuffHistory](#ei-CoopBuffHistory)
    - [CoopBuffState](#ei-CoopBuffState)
    - [CoopChickenRunEntry](#ei-CoopChickenRunEntry)
    - [CoopCompletionSnapshot](#ei-CoopCompletionSnapshot)
    - [CoopCompletionSnapshot.ContributorSnapshot](#ei-CoopCompletionSnapshot-ContributorSnapshot)
    - [CoopLastChickenRunTimes](#ei-CoopLastChickenRunTimes)
    - [CraftArtifactRequest](#ei-CraftArtifactRequest)
    - [CraftArtifactResponse](#ei-CraftArtifactResponse)
    - [CreateCoopRequest](#ei-CreateCoopRequest)
    - [CreateCoopResponse](#ei-CreateCoopResponse)
    - [CurrencyFlowBatchRequest](#ei-CurrencyFlowBatchRequest)
    - [CurrencyFlowLog](#ei-CurrencyFlowLog)
    - [DLCCatalog](#ei-DLCCatalog)
    - [DLCItem](#ei-DLCItem)
    - [DailyGiftInfo](#ei-DailyGiftInfo)
    - [DeviceInfo](#ei-DeviceInfo)
    - [EggIncAdConfig](#ei-EggIncAdConfig)
    - [EggIncCurrentEvents](#ei-EggIncCurrentEvents)
    - [EggIncEvent](#ei-EggIncEvent)
    - [EggIncFirstContactRequest](#ei-EggIncFirstContactRequest)
    - [EggIncFirstContactResponse](#ei-EggIncFirstContactResponse)
    - [FarmProductionParams](#ei-FarmProductionParams)
    - [GameModifier](#ei-GameModifier)
    - [GenericAction](#ei-GenericAction)
    - [GenericActionBatchRequest](#ei-GenericActionBatchRequest)
    - [GetPeriodicalsRequest](#ei-GetPeriodicalsRequest)
    - [GiftPlayerCoopRequest](#ei-GiftPlayerCoopRequest)
    - [IAPSaleEntry](#ei-IAPSaleEntry)
    - [InGameMail](#ei-InGameMail)
    - [InventorySlot](#ei-InventorySlot)
    - [JoinCoopRequest](#ei-JoinCoopRequest)
    - [JoinCoopResponse](#ei-JoinCoopResponse)
    - [KickPlayerCoopRequest](#ei-KickPlayerCoopRequest)
    - [LeaderboardAnalysis](#ei-LeaderboardAnalysis)
    - [LeaderboardAnalysis.Chunk](#ei-LeaderboardAnalysis-Chunk)
    - [LeaderboardInfo](#ei-LeaderboardInfo)
    - [LeaderboardInfo.Season](#ei-LeaderboardInfo-Season)
    - [LeaderboardRequest](#ei-LeaderboardRequest)
    - [LeaderboardResponse](#ei-LeaderboardResponse)
    - [LeaderboardResponse.Entry](#ei-LeaderboardResponse-Entry)
    - [LeaveCoopRequest](#ei-LeaveCoopRequest)
    - [LiveConfig](#ei-LiveConfig)
    - [LiveConfig.BoostsConfig](#ei-LiveConfig-BoostsConfig)
    - [LiveConfig.BoostsConfig.ItemConfig](#ei-LiveConfig-BoostsConfig-ItemConfig)
    - [LiveConfig.GiftConfig](#ei-LiveConfig-GiftConfig)
    - [LiveConfig.GiftConfig.GiftMuConfig](#ei-LiveConfig-GiftConfig-GiftMuConfig)
    - [LiveConfig.GiftConfig.GiftValueConfig](#ei-LiveConfig-GiftConfig-GiftValueConfig)
    - [LiveConfig.MiscConfig](#ei-LiveConfig-MiscConfig)
    - [LocalContract](#ei-LocalContract)
    - [LogCompleteMissionPayload](#ei-LogCompleteMissionPayload)
    - [LogConsumeArtifactPayload](#ei-LogConsumeArtifactPayload)
    - [LogCraftArtifactPayload](#ei-LogCraftArtifactPayload)
    - [LogSetArtifactPayload](#ei-LogSetArtifactPayload)
    - [MailDB](#ei-MailDB)
    - [MailState](#ei-MailState)
    - [MailState.TipState](#ei-MailState-TipState)
    - [MissionInfo](#ei-MissionInfo)
    - [MissionInfo.Fuel](#ei-MissionInfo-Fuel)
    - [MissionRequest](#ei-MissionRequest)
    - [MissionResponse](#ei-MissionResponse)
    - [MyContracts](#ei-MyContracts)
    - [PeriodicalsResponse](#ei-PeriodicalsResponse)
    - [PeriodicalsResponse.RoyaltyInfo](#ei-PeriodicalsResponse-RoyaltyInfo)
    - [PlayerFarmInfo](#ei-PlayerFarmInfo)
    - [QueryCoopRequest](#ei-QueryCoopRequest)
    - [QueryCoopResponse](#ei-QueryCoopResponse)
    - [ReportPlayerCoopRequest](#ei-ReportPlayerCoopRequest)
    - [ReturnEDTPayload](#ei-ReturnEDTPayload)
    - [Reward](#ei-Reward)
    - [SalesInfo](#ei-SalesInfo)
    - [SalesInfoRequest](#ei-SalesInfoRequest)
    - [SaveBackupResponse](#ei-SaveBackupResponse)
    - [SendChickenRunCoopRequest](#ei-SendChickenRunCoopRequest)
    - [ServerGift](#ei-ServerGift)
    - [SetArtifactRequest](#ei-SetArtifactRequest)
    - [SetArtifactResponse](#ei-SetArtifactResponse)
    - [ShellDB](#ei-ShellDB)
    - [ShellDB.ChickenConfig](#ei-ShellDB-ChickenConfig)
    - [ShellDB.FarmConfiguration](#ei-ShellDB-FarmConfiguration)
    - [ShellDB.LightingConfig](#ei-ShellDB-LightingConfig)
    - [ShellDB.SavedFarmConfiguration](#ei-ShellDB-SavedFarmConfiguration)
    - [ShellDB.ShellConfiguration](#ei-ShellDB-ShellConfiguration)
    - [ShellDB.ShellElementStatus](#ei-ShellDB-ShellElementStatus)
    - [ShellDB.ShellGroupConfiguration](#ei-ShellDB-ShellGroupConfiguration)
    - [ShellDB.ShellSetConfiguration](#ei-ShellDB-ShellSetConfiguration)
    - [ShellDB.ShellSetVariationStatus](#ei-ShellDB-ShellSetVariationStatus)
    - [ShellDB.ShellStatus](#ei-ShellDB-ShellStatus)
    - [ShellGroupSpec](#ei-ShellGroupSpec)
    - [ShellObjectSpec](#ei-ShellObjectSpec)
    - [ShellObjectSpec.LODPiece](#ei-ShellObjectSpec-LODPiece)
    - [ShellPopularityStats](#ei-ShellPopularityStats)
    - [ShellPopularityStats.Entry](#ei-ShellPopularityStats-Entry)
    - [ShellSetSpec](#ei-ShellSetSpec)
    - [ShellSetSpec.VariationSpec](#ei-ShellSetSpec-VariationSpec)
    - [ShellShowcase](#ei-ShellShowcase)
    - [ShellShowcaseListingInfo](#ei-ShellShowcaseListingInfo)
    - [ShellShowcaseListingSet](#ei-ShellShowcaseListingSet)
    - [ShellSpec](#ei-ShellSpec)
    - [ShellSpec.ShellPiece](#ei-ShellSpec-ShellPiece)
    - [ShellsActionBatch](#ei-ShellsActionBatch)
    - [ShellsActionLog](#ei-ShellsActionLog)
    - [ShowcaseRoyaltyDeliveryConfirmation](#ei-ShowcaseRoyaltyDeliveryConfirmation)
    - [SubmitShellShowcaseRequest](#ei-SubmitShellShowcaseRequest)
    - [SubscriptionChangeHintRequest](#ei-SubscriptionChangeHintRequest)
    - [TipsDB](#ei-TipsDB)
    - [UpdateCoopPermissionsRequest](#ei-UpdateCoopPermissionsRequest)
    - [UpdateCoopPermissionsResponse](#ei-UpdateCoopPermissionsResponse)
    - [UserDataInfoRequest](#ei-UserDataInfoRequest)
    - [UserDataInfoResponse](#ei-UserDataInfoResponse)
    - [UserSubscriptionInfo](#ei-UserSubscriptionInfo)
    - [UserSubscriptionInfo.HistoryEntry](#ei-UserSubscriptionInfo-HistoryEntry)
    - [UserVerificationAnalysis](#ei-UserVerificationAnalysis)
    - [Vector3](#ei-Vector3)
    - [Vector4](#ei-Vector4)
    - [VerifyPurchaseRequest](#ei-VerifyPurchaseRequest)
    - [VerifyPurchaseResponse](#ei-VerifyPurchaseResponse)
  
    - [AdNetwork](#ei-AdNetwork)
    - [ArtifactSpec.Level](#ei-ArtifactSpec-Level)
    - [ArtifactSpec.Name](#ei-ArtifactSpec-Name)
    - [ArtifactSpec.Rarity](#ei-ArtifactSpec-Rarity)
    - [ArtifactSpec.Type](#ei-ArtifactSpec-Type)
    - [Contract.PlayerGrade](#ei-Contract-PlayerGrade)
    - [ContractCoopStatusResponse.MemberStatus](#ei-ContractCoopStatusResponse-MemberStatus)
    - [ContractCoopStatusResponse.ResponseStatus](#ei-ContractCoopStatusResponse-ResponseStatus)
    - [ContractCoopStatusResponse.Status](#ei-ContractCoopStatusResponse-Status)
    - [ContractEvaluation.PoorBehavior](#ei-ContractEvaluation-PoorBehavior)
    - [ContractEvaluation.Status](#ei-ContractEvaluation-Status)
    - [ContractPlayerInfo.Status](#ei-ContractPlayerInfo-Status)
    - [DeviceFormFactor](#ei-DeviceFormFactor)
    - [Egg](#ei-Egg)
    - [EggIncFirstContactResponse.ErrorCodes](#ei-EggIncFirstContactResponse-ErrorCodes)
    - [FarmType](#ei-FarmType)
    - [GameModifier.GameDimension](#ei-GameModifier-GameDimension)
    - [GoalType](#ei-GoalType)
    - [KickPlayerCoopRequest.Reason](#ei-KickPlayerCoopRequest-Reason)
    - [LeaderboardScope](#ei-LeaderboardScope)
    - [MissionInfo.DurationType](#ei-MissionInfo-DurationType)
    - [MissionInfo.Spaceship](#ei-MissionInfo-Spaceship)
    - [MissionInfo.Status](#ei-MissionInfo-Status)
    - [Platform](#ei-Platform)
    - [ReportPlayerCoopRequest.Reason](#ei-ReportPlayerCoopRequest-Reason)
    - [RewardType](#ei-RewardType)
    - [SaveBackupResponse.ErrorCodes](#ei-SaveBackupResponse-ErrorCodes)
    - [ShellDB.FarmElement](#ei-ShellDB-FarmElement)
    - [ShellObjectSpec.ChickenAnimation](#ei-ShellObjectSpec-ChickenAnimation)
    - [ShellShowcaseListingInfo.Status](#ei-ShellShowcaseListingInfo-Status)
    - [ShellSpec.AssetType](#ei-ShellSpec-AssetType)
    - [UILocation](#ei-UILocation)
    - [UserSubscriptionInfo.Level](#ei-UserSubscriptionInfo-Level)
    - [UserSubscriptionInfo.Status](#ei-UserSubscriptionInfo-Status)
    - [UserType](#ei-UserType)
    - [UserVerificationAnalysis.Status](#ei-UserVerificationAnalysis-Status)
  
- [Scalar Value Types](#scalar-value-types)



<a name="ei_ei-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ei/ei.proto



<a name="ei-AccountTransferPayload"></a>

### AccountTransferPayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| from_id | [string](#string) | optional |  |
| to_ei_user_id | [string](#string) | optional |  |






<a name="ei-ActionKeyValuePair"></a>

### ActionKeyValuePair



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) | required |  |
| value | [string](#string) | required |  |






<a name="ei-AdAttributionInfo"></a>

### AdAttributionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_ad_id | [string](#string) | optional |  |
| network_name | [string](#string) | optional |  |
| attribution | [bool](#bool) | optional |  |
| org_name | [string](#string) | optional |  |
| org_id | [string](#string) | optional |  |
| campaign_name | [string](#string) | optional |  |
| campaign_id | [string](#string) | optional |  |
| click_date | [string](#string) | optional |  |
| conversion_date | [string](#string) | optional |  |
| conversion_type | [string](#string) | optional |  |
| geo | [string](#string) | optional |  |
| adgroup_name | [string](#string) | optional |  |
| adgroup_id | [string](#string) | optional |  |
| keyword | [string](#string) | optional |  |
| keyword_id | [string](#string) | optional |  |
| keyword_extra | [string](#string) | optional |  |
| creativeset_name | [string](#string) | optional |  |
| creativeset_id | [string](#string) | optional |  |






<a name="ei-AdAttributionRawData"></a>

### AdAttributionRawData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_ad_id | [string](#string) | optional |  |
| user_id | [string](#string) | optional |  |
| ad_network | [string](#string) | optional |  |
| json_data | [string](#string) | optional |  |






<a name="ei-AdAttributionRow"></a>

### AdAttributionRow



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| ad_id | [string](#string) | optional |  |
| ad_network | [string](#string) | optional |  |
| campaign | [string](#string) | optional |  |
| keyword | [string](#string) | optional |  |
| extra | [string](#string) | optional |  |
| click_date | [float](#float) | optional |  |
| download_date | [float](#float) | optional |  |
| approx_time | [float](#float) | optional |  |






<a name="ei-AppInfo"></a>

### AppInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version_str | [string](#string) | optional |  |
| sessions | [uint32](#uint32) | optional |  |
| num_prestiges | [uint32](#uint32) | optional |  |
| soul_eggs | [uint64](#uint64) | optional |  |
| current_egg | [uint32](#uint32) | optional |  |
| gold_earned | [uint64](#uint64) | optional |  |
| gold_spent | [uint64](#uint64) | optional |  |
| current_mission | [uint32](#uint32) | optional |  |
| piggy_size | [uint32](#uint32) | optional |  |
| num_piggy_breaks | [uint64](#uint64) | optional |  |
| verified_piggy_breaks | [uint64](#uint64) | optional |  |
| iap_packs_purchased | [uint64](#uint64) | optional |  |
| permit_level | [uint32](#uint32) | optional |  |
| video_doubler_uses | [uint64](#uint64) | optional |  |
| drone_takedowns | [uint64](#uint64) | optional |  |
| drone_takedowns_elite | [uint64](#uint64) | optional |  |
| trophies_unlocked | [bool](#bool) | optional |  |
| egg_level | [float](#float) | optional |  |
| struggle_factor | [float](#float) | optional |  |
| piggy_full | [bool](#bool) | optional |  |
| piggy_found_full | [bool](#bool) | optional |  |
| time_piggy_full_realtime | [double](#double) | optional |  |
| time_piggy_full_gametime | [double](#double) | optional |  |
| lost_piggy_increments | [uint64](#uint64) | optional |  |
| sale_id | [string](#string) | optional |  |
| unlimited_chickens_uses | [uint64](#uint64) | optional |  |
| refill_uses | [uint64](#uint64) | optional |  |
| short_warp_uses | [uint64](#uint64) | optional |  |
| long_warp_uses | [uint64](#uint64) | optional |  |






<a name="ei-ArtifactInventoryItem"></a>

### ArtifactInventoryItem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item_id | [uint64](#uint64) | optional |  |
| artifact | [CompleteArtifact](#ei-CompleteArtifact) | optional |  |
| quantity | [double](#double) | optional |  |
| server_id | [string](#string) | optional |  |






<a name="ei-ArtifactSpec"></a>

### ArtifactSpec



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [ArtifactSpec.Name](#ei-ArtifactSpec-Name) | optional |  |
| level | [ArtifactSpec.Level](#ei-ArtifactSpec-Level) | optional |  |
| rarity | [ArtifactSpec.Rarity](#ei-ArtifactSpec-Rarity) | optional |  |
| egg | [Egg](#ei-Egg) | optional |  |






<a name="ei-ArtifactsClientInfo"></a>

### ArtifactsClientInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mission_capacity_mult | [double](#double) | optional |  |
| mission_duration_mult | [double](#double) | optional |  |
| mission_ftl_duration_mult | [double](#double) | optional |  |
| launch_counts | [ArtifactsClientInfo.LaunchCount](#ei-ArtifactsClientInfo-LaunchCount) | repeated |  |






<a name="ei-ArtifactsClientInfo-LaunchCount"></a>

### ArtifactsClientInfo.LaunchCount



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ship | [MissionInfo.Spaceship](#ei-MissionInfo-Spaceship) | optional |  |
| num_launches | [uint32](#uint32) | optional |  |
| launch_points | [double](#double) | optional |  |






<a name="ei-ArtifactsConfigurationRequest"></a>

### ArtifactsConfigurationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-ArtifactsConfigurationResponse"></a>

### ArtifactsConfigurationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mission_parameters | [ArtifactsConfigurationResponse.MissionParameters](#ei-ArtifactsConfigurationResponse-MissionParameters) | repeated |  |
| artifact_parameters | [ArtifactsConfigurationResponse.ArtifactParameters](#ei-ArtifactsConfigurationResponse-ArtifactParameters) | repeated |  |
| crafting_level_infos | [ArtifactsConfigurationResponse.CraftingLevelInfo](#ei-ArtifactsConfigurationResponse-CraftingLevelInfo) | repeated |  |






<a name="ei-ArtifactsConfigurationResponse-ArtifactParameters"></a>

### ArtifactsConfigurationResponse.ArtifactParameters



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spec | [ArtifactSpec](#ei-ArtifactSpec) | optional |  |
| base_quality | [double](#double) | optional |  |
| odds_multiplier | [double](#double) | optional |  |
| value | [double](#double) | optional |  |
| crafting_price | [double](#double) | optional |  |
| crafting_price_low | [double](#double) | optional |  |
| crafting_price_domain | [uint32](#uint32) | optional |  |
| crafting_price_curve | [double](#double) | optional |  |
| crafting_xp | [uint64](#uint64) | optional |  |






<a name="ei-ArtifactsConfigurationResponse-CraftingLevelInfo"></a>

### ArtifactsConfigurationResponse.CraftingLevelInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| xp_required | [double](#double) | optional |  |
| rarity_mult | [float](#float) | optional |  |






<a name="ei-ArtifactsConfigurationResponse-MissionParameters"></a>

### ArtifactsConfigurationResponse.MissionParameters



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ship | [MissionInfo.Spaceship](#ei-MissionInfo-Spaceship) | optional |  |
| durations | [ArtifactsConfigurationResponse.MissionParameters.Duration](#ei-ArtifactsConfigurationResponse-MissionParameters-Duration) | repeated |  |
| level_mission_requirements | [uint32](#uint32) | repeated |  |
| capacity_DEPRECATED | [uint32](#uint32) | optional |  |






<a name="ei-ArtifactsConfigurationResponse-MissionParameters-Duration"></a>

### ArtifactsConfigurationResponse.MissionParameters.Duration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| duration_type | [MissionInfo.DurationType](#ei-MissionInfo-DurationType) | optional |  |
| seconds | [double](#double) | optional |  |
| quality | [float](#float) | optional |  |
| min_quality | [float](#float) | optional |  |
| max_quality | [float](#float) | optional |  |
| capacity | [uint32](#uint32) | optional |  |
| level_capacity_bump | [uint32](#uint32) | optional |  |
| level_quality_bump | [float](#float) | optional |  |






<a name="ei-ArtifactsDB"></a>

### ArtifactsDB



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inventory_items | [ArtifactInventoryItem](#ei-ArtifactInventoryItem) | repeated |  |
| item_sequence | [uint64](#uint64) | optional |  |
| inventory_slots | [InventorySlot](#ei-InventorySlot) | repeated |  |
| active_artifacts_DEPRECATED | [ArtifactsDB.ActiveArtifactSlot](#ei-ArtifactsDB-ActiveArtifactSlot) | repeated |  |
| active_artifact_sets | [ArtifactsDB.ActiveArtifactSet](#ei-ArtifactsDB-ActiveArtifactSet) | repeated |  |
| saved_artifact_sets | [ArtifactsDB.ActiveArtifactSet](#ei-ArtifactsDB-ActiveArtifactSet) | repeated |  |
| artifact_status | [ArtifactsDB.CraftableArtifact](#ei-ArtifactsDB-CraftableArtifact) | repeated |  |
| mission_infos | [MissionInfo](#ei-MissionInfo) | repeated |  |
| mission_archive | [MissionInfo](#ei-MissionInfo) | repeated |  |
| discovered_artifacts_DEPRECATED | [ArtifactSpec](#ei-ArtifactSpec) | repeated |  |
| craftable_artifacts_DEPRECATED | [ArtifactsDB.CraftableArtifact](#ei-ArtifactsDB-CraftableArtifact) | repeated |  |
| crafting_counts_DEPRECATED | [ArtifactsDB.CraftableArtifact](#ei-ArtifactsDB-CraftableArtifact) | repeated |  |






<a name="ei-ArtifactsDB-ActiveArtifactSet"></a>

### ArtifactsDB.ActiveArtifactSet



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| slots | [ArtifactsDB.ActiveArtifactSlot](#ei-ArtifactsDB-ActiveArtifactSlot) | repeated |  |
| uid | [uint32](#uint32) | optional |  |






<a name="ei-ArtifactsDB-ActiveArtifactSlot"></a>

### ArtifactsDB.ActiveArtifactSlot



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| occupied | [bool](#bool) | optional |  |
| item_id | [uint64](#uint64) | optional |  |






<a name="ei-ArtifactsDB-CraftableArtifact"></a>

### ArtifactsDB.CraftableArtifact



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spec | [ArtifactSpec](#ei-ArtifactSpec) | optional |  |
| discovered | [bool](#bool) | optional |  |
| craftable | [bool](#bool) | optional |  |
| recipe_discovered | [bool](#bool) | optional |  |
| seen | [bool](#bool) | optional |  |
| count | [uint32](#uint32) | optional |  |






<a name="ei-AuthenticateArtifactResponse"></a>

### AuthenticateArtifactResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) | optional |  |
| original_item_id | [uint64](#uint64) | optional |  |
| demote | [bool](#bool) | optional |  |
| delete | [bool](#bool) | optional |  |
| ei_user_id | [string](#string) | optional |  |






<a name="ei-AuthenticatedMessage"></a>

### AuthenticatedMessage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [bytes](#bytes) | optional |  |
| version | [uint32](#uint32) | optional |  |
| code | [string](#string) | optional |  |
| compressed | [bool](#bool) | optional |  |
| original_size | [uint32](#uint32) | optional |  |
| user_id | [string](#string) | optional |  |






<a name="ei-AutoJoinCoopRequest"></a>

### AutoJoinCoopRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| user_id | [string](#string) | optional |  |
| user_name | [string](#string) | optional |  |
| soul_power | [double](#double) | optional |  |
| eop | [double](#double) | optional |  |
| league | [uint32](#uint32) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| points_replay | [bool](#bool) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| platform | [Platform](#ei-Platform) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-Backup"></a>

### Backup



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| ei_user_id | [string](#string) | optional |  |
| game_services_id | [string](#string) | optional |  |
| push_user_id | [string](#string) | optional |  |
| device_id | [string](#string) | optional |  |
| user_name | [string](#string) | optional |  |
| approx_time | [double](#double) | optional |  |
| version | [uint32](#uint32) | optional |  Default: 0 |
| force_offer_backup | [bool](#bool) | optional |  |
| force_backup | [bool](#bool) | optional |  |
| settings | [Backup.Settings](#ei-Backup-Settings) | optional |  |
| tutorial | [Backup.Tutorial](#ei-Backup-Tutorial) | optional |  |
| stats | [Backup.Stats](#ei-Backup-Stats) | optional |  |
| game | [Backup.Game](#ei-Backup-Game) | optional |  |
| artifacts | [Backup.Artifacts](#ei-Backup-Artifacts) | optional |  |
| shells | [Backup.Shells](#ei-Backup-Shells) | optional |  |
| sim | [Backup.Simulation](#ei-Backup-Simulation) | optional |  |
| farms | [Backup.Simulation](#ei-Backup-Simulation) | repeated |  |
| mission | [Backup.Mission](#ei-Backup-Mission) | optional |  |
| misc | [Backup.Misc](#ei-Backup-Misc) | optional |  |
| contracts | [MyContracts](#ei-MyContracts) | optional |  |
| artifacts_db | [ArtifactsDB](#ei-ArtifactsDB) | optional |  |
| shell_db | [ShellDB](#ei-ShellDB) | optional |  |
| read_mail_ids | [string](#string) | repeated |  |
| mail_state | [MailState](#ei-MailState) | optional |  |
| checksum | [uint64](#uint64) | optional |  |
| signature | [string](#string) | optional |  |






<a name="ei-Backup-AchievementInfo"></a>

### Backup.AchievementInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| achieved | [bool](#bool) | optional |  |






<a name="ei-Backup-ActiveBoost"></a>

### Backup.ActiveBoost



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| boost_id | [string](#string) | optional |  |
| time_remaining | [double](#double) | optional |  |
| reference_value | [double](#double) | optional |  |






<a name="ei-Backup-Artifacts"></a>

### Backup.Artifacts



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| infusing | [bool](#bool) | optional |  |
| item_being_infused | [ArtifactInventoryItem](#ei-ArtifactInventoryItem) | optional |  |
| spec_being_infused | [ArtifactSpec](#ei-ArtifactSpec) | optional |  |
| egg_type_infusing | [Egg](#ei-Egg) | optional |  |
| infusing_eggs_required | [double](#double) | optional |  |
| eggs_infused | [double](#double) | optional |  |
| flow_percentage_artifacts | [double](#double) | optional |  Default: 0.5 |
| fueling_enabled | [bool](#bool) | optional |  Default: true |
| tank_filling_enabled | [bool](#bool) | optional |  |
| tank_level | [uint32](#uint32) | optional |  |
| tank_fuels | [double](#double) | repeated |  |
| tank_limits | [double](#double) | repeated |  |
| last_fueled_ship | [MissionInfo.Spaceship](#ei-MissionInfo-Spaceship) | optional |  |
| inventory_score | [double](#double) | optional |  |
| crafting_xp | [double](#double) | optional |  |
| enabled | [bool](#bool) | optional |  |
| intro_shown | [bool](#bool) | optional |  |
| infusing_enabled_DEPRECATED | [bool](#bool) | optional |  Default: true |






<a name="ei-Backup-Game"></a>

### Backup.Game



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_farm | [uint32](#uint32) | optional |  Default: 0 |
| max_egg_reached | [Egg](#ei-Egg) | optional |  |
| golden_eggs_earned | [uint64](#uint64) | optional |  |
| golden_eggs_spent | [uint64](#uint64) | optional |  |
| uncliamed_golden_eggs | [uint64](#uint64) | optional |  |
| soul_eggs | [uint64](#uint64) | optional |  |
| unclaimed_soul_eggs | [uint64](#uint64) | optional |  |
| soul_eggs_d | [double](#double) | optional |  |
| unclaimed_soul_eggs_d | [double](#double) | optional |  |
| eggs_of_prophecy | [uint64](#uint64) | optional |  |
| unclaimed_eggs_of_prophecy | [uint64](#uint64) | optional |  |
| shell_scripts_earned | [uint64](#uint64) | optional |  |
| shell_scripts_spent | [uint64](#uint64) | optional |  |
| unclaimed_shell_scripts | [uint64](#uint64) | optional |  |
| prestige_cash_earned | [double](#double) | optional |  |
| prestige_soul_boost_cash | [double](#double) | optional |  |
| lifetime_cash_earned | [double](#double) | optional |  |
| piggy_bank | [uint64](#uint64) | optional |  |
| piggy_full_alert_shown | [bool](#bool) | optional |  |
| permit_level | [uint32](#uint32) | optional |  |
| epic_research | [Backup.ResearchItem](#ei-Backup-ResearchItem) | repeated |  |
| hyperloop_station | [bool](#bool) | optional |  |
| next_daily_gift_time | [double](#double) | optional |  |
| last_daily_gift_collected_day | [uint32](#uint32) | optional |  |
| num_daily_gifts_collected | [uint32](#uint32) | optional |  |
| news | [Backup.NewsHeadline](#ei-Backup-NewsHeadline) | repeated |  |
| last_news_time | [double](#double) | optional |  |
| current_multiplier | [double](#double) | optional |  |
| current_multiplier_expiration | [double](#double) | optional |  |
| achievements | [Backup.AchievementInfo](#ei-Backup-AchievementInfo) | repeated |  |
| max_farm_size_reached | [uint64](#uint64) | repeated |  |
| egg_medal_level | [uint32](#uint32) | repeated |  |
| long_idle_notification_set | [bool](#bool) | optional |  |
| long_idle_notification_threshold | [double](#double) | optional |  |
| long_idle_reward | [double](#double) | optional |  |
| boosts | [Backup.OwnedBoost](#ei-Backup-OwnedBoost) | repeated |  |
| total_time_cheats_detected | [uint32](#uint32) | optional |  |
| force_elite_contracts | [bool](#bool) | optional |  |
| new_player_event_end_time | [double](#double) | optional |  |






<a name="ei-Backup-Misc"></a>

### Backup.Misc



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chicken_btn_pref_big | [bool](#bool) | optional |  |
| free_hatchery_refill_given | [bool](#bool) | optional |  |
| last_share_farm_value | [double](#double) | optional |  Default: 10000000 |
| last_share_swarm_farm_value | [double](#double) | optional |  Default: 10000000 |
| last_share_swarm_size | [double](#double) | optional |  Default: 140 |
| last_prestige_alert_soul_eggs_DEPRECATED | [uint64](#uint64) | optional |  Default: 45 |
| friend_rank | [uint64](#uint64) | optional |  |
| friend_rank_pop | [uint64](#uint64) | optional |  |
| global_rank | [uint64](#uint64) | optional |  |
| global_rank_pop | [uint64](#uint64) | optional |  |
| challenges_alert | [bool](#bool) | optional |  |
| trophy_alert | [bool](#bool) | optional |  |
| ar_alert | [bool](#bool) | optional |  |
| contracts_alert | [bool](#bool) | optional |  |
| contracts_alert_v2 | [bool](#bool) | optional |  |
| coop_alert | [bool](#bool) | optional |  |
| coop_alert_v2 | [bool](#bool) | optional |  |
| switch_alert | [bool](#bool) | optional |  |
| egg_of_prophecy_alert | [bool](#bool) | optional |  |
| boost_token_alert | [bool](#bool) | optional |  |
| soul_egg_alert | [bool](#bool) | optional |  |
| backup_reminder_alert | [bool](#bool) | optional |  |
| max_button_alert | [bool](#bool) | optional |  |
| mission_target_alert | [bool](#bool) | optional |  |






<a name="ei-Backup-Mission"></a>

### Backup.Mission



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_mission | [string](#string) | optional |  |
| reference_value | [double](#double) | optional |  |
| current_missions | [string](#string) | repeated |  |
| missions | [Backup.MissionInfo](#ei-Backup-MissionInfo) | repeated |  |






<a name="ei-Backup-MissionInfo"></a>

### Backup.MissionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| completed | [bool](#bool) | optional |  |
| reference_value | [double](#double) | optional |  |






<a name="ei-Backup-NewsHeadline"></a>

### Backup.NewsHeadline



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| read | [bool](#bool) | optional |  |






<a name="ei-Backup-OwnedBoost"></a>

### Backup.OwnedBoost



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| boost_id | [string](#string) | optional |  |
| count | [uint32](#uint32) | optional |  |






<a name="ei-Backup-ResearchItem"></a>

### Backup.ResearchItem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| level | [uint32](#uint32) | optional |  |






<a name="ei-Backup-Settings"></a>

### Backup.Settings



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sfx | [bool](#bool) | optional |  |
| music | [bool](#bool) | optional |  |
| low_battery_mode | [bool](#bool) | optional |  |
| low_performance_mode | [bool](#bool) | optional |  |
| force_touch_chicken_btn | [bool](#bool) | optional |  |
| notifications_queried | [bool](#bool) | optional |  |
| last_notification_query_time | [double](#double) | optional |  |
| notifications_on | [bool](#bool) | optional |  |
| notify_daily_gift | [bool](#bool) | optional |  |
| low_performance | [bool](#bool) | optional |  |
| auto_stop_fueling | [bool](#bool) | optional |  |
| max_enabled | [bool](#bool) | optional |  |
| hide_cc_status | [bool](#bool) | optional |  |
| contracts_widget_enabled | [bool](#bool) | optional |  |
| last_backup_time | [double](#double) | optional |  |
| coppa_queried | [bool](#bool) | optional |  |
| coppa_restricted | [bool](#bool) | optional |  |
| gdpr_consent_queried | [bool](#bool) | optional |  |
| gdpr_age_restricted | [bool](#bool) | optional |  |
| gdpr_consent_given | [bool](#bool) | optional |  |
| age_queried | [bool](#bool) | optional |  |
| age_restricted | [bool](#bool) | optional |  Default: false |
| data_collection_consent_queried | [bool](#bool) | optional |  |
| data_collection_consent_given | [bool](#bool) | optional |  |
| last_day_age_queried | [uint32](#uint32) | optional |  |
| user_ads_enabled | [bool](#bool) | optional |  Default: true |
| user_cloud_enabled | [bool](#bool) | optional |  Default: true |
| user_analytics_enabled | [bool](#bool) | optional |  Default: true |
| user_personalized_ads_enabled | [bool](#bool) | optional |  Default: true |






<a name="ei-Backup-Shells"></a>

### Backup.Shells



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| intro_alert | [bool](#bool) | optional |  |
| contracts_intro_alert | [bool](#bool) | optional |  |
| num_new | [int32](#int32) | repeated |  |






<a name="ei-Backup-Simulation"></a>

### Backup.Simulation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| egg_type | [Egg](#ei-Egg) | optional |  |
| farm_type | [FarmType](#ei-FarmType) | optional |  |
| contract_id | [string](#string) | optional |  |
| cash_earned | [double](#double) | optional |  |
| cash_spent | [double](#double) | optional |  |
| unclaimed_cash | [double](#double) | optional |  |
| last_step_time | [double](#double) | optional |  |
| num_chickens | [uint64](#uint64) | optional |  |
| num_chickens_unsettled | [uint64](#uint64) | optional |  |
| num_chickens_running | [uint64](#uint64) | optional |  |
| eggs_laid | [double](#double) | optional |  |
| eggs_shipped | [double](#double) | optional |  |
| eggs_paid_for | [double](#double) | optional |  |
| silos_owned | [uint32](#uint32) | optional |  |
| habs | [uint32](#uint32) | repeated |  |
| hab_population | [uint64](#uint64) | repeated |  |
| hab_population_indound | [uint64](#uint64) | repeated |  |
| hab_incubator_popuplation | [double](#double) | repeated |  |
| hatchery_population | [double](#double) | optional |  |
| vehicles | [uint32](#uint32) | repeated |  |
| train_length | [uint32](#uint32) | repeated |  |
| common_research | [Backup.ResearchItem](#ei-Backup-ResearchItem) | repeated |  |
| active_boosts | [Backup.ActiveBoost](#ei-Backup-ActiveBoost) | repeated |  |
| last_cash_boost_time | [double](#double) | optional |  |
| time_cheats_detected | [uint32](#uint32) | optional |  |
| time_cheat_debt | [double](#double) | optional |  |
| boost_tokens_received | [uint32](#uint32) | optional |  |
| boost_tokens_spent | [uint32](#uint32) | optional |  |
| boost_tokens_given | [uint32](#uint32) | optional |  |
| unclaimed_boost_tokens | [uint32](#uint32) | optional |  |
| gametime_until_next_boost_token | [double](#double) | optional |  |






<a name="ei-Backup-Stats"></a>

### Backup.Stats



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| egg_totals_OLD | [uint64](#uint64) | repeated |  |
| egg_totals | [double](#double) | repeated |  |
| unlimited_chickens_uses | [uint64](#uint64) | optional |  |
| refill_uses | [uint64](#uint64) | optional |  |
| warp_1_uses | [uint64](#uint64) | optional |  |
| warp_8_uses | [uint64](#uint64) | optional |  |
| boosts_used | [uint64](#uint64) | optional |  |
| video_doubler_uses | [uint64](#uint64) | optional |  |
| drone_takedowns | [uint64](#uint64) | optional |  |
| drone_takedowns_elite | [uint64](#uint64) | optional |  |
| num_prestiges | [uint64](#uint64) | optional |  |
| num_piggy_breaks | [uint64](#uint64) | optional |  |
| iap_packs_purchased | [uint64](#uint64) | optional |  |
| piggy_full | [bool](#bool) | optional |  |
| piggy_found_full | [bool](#bool) | optional |  |
| time_piggy_filled_realtime | [double](#double) | optional |  |
| time_piggy_full_gametime | [double](#double) | optional |  |
| lost_piggy_increments | [uint64](#uint64) | optional |  |






<a name="ei-Backup-Tutorial"></a>

### Backup.Tutorial



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| intro_shown | [bool](#bool) | optional |  |
| click_tutorial_shown | [bool](#bool) | optional |  |
| buy_hab_shown | [bool](#bool) | optional |  |
| hire_vehicle_shown | [bool](#bool) | optional |  |
| q_num_shown | [bool](#bool) | optional |  |
| s_num_shown | [bool](#bool) | optional |  |
| contracts_tab_shown | [bool](#bool) | optional |  |
| contract_info_shown | [bool](#bool) | optional |  |
| join_coop_shown | [bool](#bool) | optional |  |
| switch_farm_shown | [bool](#bool) | optional |  |
| tutorial_shown | [bool](#bool) | repeated |  |






<a name="ei-BasicRequestInfo"></a>

### BasicRequestInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ei_user_id | [string](#string) | optional |  |
| client_version | [uint32](#uint32) | optional |  |
| version | [string](#string) | optional |  |
| build | [string](#string) | optional |  |
| platform | [string](#string) | optional |  |
| country | [string](#string) | optional |  |
| language | [string](#string) | optional |  |
| debug | [bool](#bool) | optional |  |






<a name="ei-CXPEvalRolloutInfo"></a>

### CXPEvalRolloutInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_id | [string](#string) | optional |  |
| basis_points | [uint32](#uint32) | optional |  |






<a name="ei-CleanAccountRequest"></a>

### CleanAccountRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ei_user_id_to_keep | [string](#string) | optional |  |
| game_services_id | [string](#string) | optional |  |






<a name="ei-ClearAllUserDataRequest"></a>

### ClearAllUserDataRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| user_id | [string](#string) | optional |  |
| device_id | [string](#string) | optional |  |
| backup_checksum | [uint64](#uint64) | optional |  |






<a name="ei-CollectContractArtifactRewardsRequest"></a>

### CollectContractArtifactRewardsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| league | [uint32](#uint32) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| goal_index | [uint32](#uint32) | optional |  |
| best_ship | [MissionInfo.Spaceship](#ei-MissionInfo-Spaceship) | optional |  |






<a name="ei-CompleteArtifact"></a>

### CompleteArtifact



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spec | [ArtifactSpec](#ei-ArtifactSpec) | optional |  |
| stones | [ArtifactSpec](#ei-ArtifactSpec) | repeated |  |






<a name="ei-CompleteMissionResponse"></a>

### CompleteMissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) | optional |  |
| info | [MissionInfo](#ei-MissionInfo) | optional |  |
| artifacts | [CompleteMissionResponse.SecureArtifactSpec](#ei-CompleteMissionResponse-SecureArtifactSpec) | repeated |  |
| other_rewards | [Reward](#ei-Reward) | repeated |  |
| ei_user_id | [string](#string) | optional |  |






<a name="ei-CompleteMissionResponse-SecureArtifactSpec"></a>

### CompleteMissionResponse.SecureArtifactSpec



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spec | [ArtifactSpec](#ei-ArtifactSpec) | optional |  |
| server_id | [string](#string) | optional |  |






<a name="ei-ConfigRequest"></a>

### ConfigRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| soul_eggs | [double](#double) | optional |  |
| contracts_unlocked | [bool](#bool) | optional |  |
| artifacts_unlocked | [bool](#bool) | optional |  |
| fuel_tank_unlocked | [bool](#bool) | optional |  |
| pro_permit | [bool](#bool) | optional |  |
| ultra | [bool](#bool) | optional |  |
| tips_checksum | [string](#string) | optional |  |






<a name="ei-ConfigResponse"></a>

### ConfigResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| live_config | [LiveConfig](#ei-LiveConfig) | optional |  |
| mail_bag | [MailDB](#ei-MailDB) | optional |  |
| dlc_catalog | [DLCCatalog](#ei-DLCCatalog) | optional |  |






<a name="ei-ConsumeArtifactRequest"></a>

### ConsumeArtifactRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| ei_user_id | [string](#string) | optional |  |
| spec | [ArtifactSpec](#ei-ArtifactSpec) | optional |  |
| artifact_server_id | [string](#string) | optional |  |
| original_item_id | [uint64](#uint64) | optional |  |
| additional_server_ids | [string](#string) | repeated |  |
| additional_item_ids | [uint64](#uint64) | repeated |  |
| quantity | [uint32](#uint32) | optional |  |






<a name="ei-ConsumeArtifactResponse"></a>

### ConsumeArtifactResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) | optional |  |
| original_item_id | [uint64](#uint64) | optional |  |
| additional_item_ids | [uint64](#uint64) | repeated |  |
| byproducts | [ArtifactSpec](#ei-ArtifactSpec) | repeated |  |
| other_rewards | [Reward](#ei-Reward) | repeated |  |
| ei_user_id | [string](#string) | optional |  |






<a name="ei-Contract"></a>

### Contract



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) | optional |  |
| name | [string](#string) | optional |  |
| description | [string](#string) | optional |  |
| egg | [Egg](#ei-Egg) | optional |  |
| goals | [Contract.Goal](#ei-Contract-Goal) | repeated |  |
| goal_sets | [Contract.GoalSet](#ei-Contract-GoalSet) | repeated |  |
| grade_specs | [Contract.GradeSpec](#ei-Contract-GradeSpec) | repeated |  |
| season_id | [string](#string) | optional |  |
| coop_allowed | [bool](#bool) | optional |  |
| max_coop_size | [uint32](#uint32) | optional |  |
| max_boosts | [uint32](#uint32) | optional |  |
| minutes_per_token | [double](#double) | optional |  Default: 60 |
| chicken_run_cooldown_minutes | [double](#double) | optional |  Default: 180 |
| start_time | [double](#double) | optional |  |
| expiration_time | [double](#double) | optional |  |
| length_seconds | [double](#double) | optional |  |
| max_soul_eggs | [double](#double) | optional |  |
| min_client_version | [uint32](#uint32) | optional |  |
| leggacy | [bool](#bool) | optional |  |
| cc_only | [bool](#bool) | optional |  |
| default_shell_ids | [string](#string) | repeated |  |
| debug | [bool](#bool) | optional |  |
| key | [string](#string) | optional |  |






<a name="ei-Contract-Goal"></a>

### Contract.Goal



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [GoalType](#ei-GoalType) | optional |  |
| target_amount | [double](#double) | optional |  |
| reward_type | [RewardType](#ei-RewardType) | optional |  |
| reward_sub_type | [string](#string) | optional |  |
| reward_amount | [double](#double) | optional |  |
| target_soul_eggs | [double](#double) | optional |  |






<a name="ei-Contract-GoalSet"></a>

### Contract.GoalSet



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| goals | [Contract.Goal](#ei-Contract-Goal) | repeated |  |






<a name="ei-Contract-GradeSpec"></a>

### Contract.GradeSpec



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| goals | [Contract.Goal](#ei-Contract-Goal) | repeated |  |
| modifiers | [GameModifier](#ei-GameModifier) | repeated |  |
| length_seconds | [double](#double) | optional |  |






<a name="ei-ContractAction"></a>

### ContractAction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| action_name | [string](#string) | optional |  |
| approx_time | [double](#double) | optional |  |
| dest_user_id | [string](#string) | optional |  |
| contract_id | [string](#string) | optional |  |
| coop_id | [string](#string) | optional |  |
| autojoin | [bool](#bool) | optional |  |
| grade | [uint32](#uint32) | optional |  |
| replay | [bool](#bool) | optional |  |
| points_replay | [bool](#bool) | optional |  |
| reward_type | [uint32](#uint32) | optional |  |
| reward_subtype | [string](#string) | optional |  |
| reward_amount | [double](#double) | optional |  |
| goal_index | [uint32](#uint32) | optional |  |
| boost_id | [string](#string) | optional |  |
| tokens | [uint32](#uint32) | optional |  |
| kick_reason | [uint32](#uint32) | optional |  |
| public | [bool](#bool) | optional |  |
| cc_only | [bool](#bool) | optional |  |






<a name="ei-ContractCitation"></a>

### ContractCitation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| issue | [ContractEvaluation.PoorBehavior](#ei-ContractEvaluation-PoorBehavior) | optional |  |
| timestamp | [double](#double) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |






<a name="ei-ContractCoopStatusRequest"></a>

### ContractCoopStatusRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| user_id | [string](#string) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-ContractCoopStatusResponse"></a>

### ContractCoopStatusResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| response_status | [ContractCoopStatusResponse.ResponseStatus](#ei-ContractCoopStatusResponse-ResponseStatus) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| total_amount | [double](#double) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| contributors | [ContractCoopStatusResponse.ContributionInfo](#ei-ContractCoopStatusResponse-ContributionInfo) | repeated |  |
| auto_generated | [bool](#bool) | optional |  |
| public | [bool](#bool) | optional |  |
| creator_id | [string](#string) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| seconds_since_all_goals_achieved | [double](#double) | optional |  |
| all_goals_achieved | [bool](#bool) | optional |  |
| all_members_reporting | [bool](#bool) | optional |  |
| grace_period_seconds_remaining | [double](#double) | optional |  |
| cleared_for_exit | [bool](#bool) | optional |  |
| gifts | [ContractCoopStatusResponse.CoopGift](#ei-ContractCoopStatusResponse-CoopGift) | repeated |  |
| chicken_runs | [ContractCoopStatusResponse.ChickenRun](#ei-ContractCoopStatusResponse-ChickenRun) | repeated |  |
| local_timestamp | [double](#double) | optional |  |
| last_sync | [double](#double) | optional |  |






<a name="ei-ContractCoopStatusResponse-ChickenRun"></a>

### ContractCoopStatusResponse.ChickenRun



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| user_name | [string](#string) | optional |  |
| amount | [uint64](#uint64) | optional |  |






<a name="ei-ContractCoopStatusResponse-ContributionInfo"></a>

### ContractCoopStatusResponse.ContributionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) | optional |  |
| user_id | [string](#string) | optional |  |
| user_name | [string](#string) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| contribution_amount | [double](#double) | optional |  |
| contribution_rate | [double](#double) | optional |  |
| soul_power | [double](#double) | optional |  |
| production_params | [FarmProductionParams](#ei-FarmProductionParams) | optional |  |
| farm_info | [PlayerFarmInfo](#ei-PlayerFarmInfo) | optional |  |
| rank_change | [int32](#int32) | optional |  |
| recently_active | [bool](#bool) | optional |  |
| active | [bool](#bool) | optional |  |
| cc_member | [bool](#bool) | optional |  |
| leech | [bool](#bool) | optional |  |
| finalized | [bool](#bool) | optional |  |
| time_cheat_detected | [bool](#bool) | optional |  |
| platform | [Platform](#ei-Platform) | optional |  |
| push_id | [string](#string) | optional |  |
| ban_votes | [uint32](#uint32) | optional |  |
| autojoined | [bool](#bool) | optional |  |
| boost_tokens | [uint32](#uint32) | optional |  |
| boost_tokens_spent | [uint32](#uint32) | optional |  |
| buff_history | [CoopBuffState](#ei-CoopBuffState) | repeated |  |
| chicken_run_cooldown | [double](#double) | optional |  |






<a name="ei-ContractCoopStatusResponse-CoopGift"></a>

### ContractCoopStatusResponse.CoopGift



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| user_name | [string](#string) | optional |  |
| amount | [uint32](#uint32) | optional |  |
| tracking | [string](#string) | optional |  |






<a name="ei-ContractCoopStatusUpdateRequest"></a>

### ContractCoopStatusUpdateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| user_id | [string](#string) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| push_user_id | [string](#string) | optional |  |
| amount | [double](#double) | optional |  |
| rate | [double](#double) | optional |  |
| time_cheats_detected | [uint32](#uint32) | optional |  |
| soul_power | [double](#double) | optional |  |
| eop | [uint32](#uint32) | optional |  |
| boost_tokens | [uint32](#uint32) | optional |  |
| boost_tokens_spent | [uint32](#uint32) | optional |  |
| hide_cc_status | [bool](#bool) | optional |  |
| production_params | [FarmProductionParams](#ei-FarmProductionParams) | optional |  |
| farm_info | [PlayerFarmInfo](#ei-PlayerFarmInfo) | optional |  |
| egg_laying_rate_buff | [double](#double) | optional |  Default: 1 |
| earnings_buff | [double](#double) | optional |  Default: 1 |






<a name="ei-ContractCoopStatusUpdateResponse"></a>

### ContractCoopStatusUpdateResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| finalized | [bool](#bool) | optional |  |
| exists | [bool](#bool) | optional |  |
| status | [ContractCoopStatusResponse.MemberStatus](#ei-ContractCoopStatusResponse-MemberStatus) | optional |  |






<a name="ei-ContractEvaluation"></a>

### ContractEvaluation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| cxp | [double](#double) | optional |  |
| replay | [bool](#bool) | optional |  |
| cxp_change | [double](#double) | optional |  |
| grade_performance | [int32](#int32) | optional |  |
| old_league | [int32](#int32) | optional |  |
| old_goals | [bool](#bool) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| contribution_ratio | [double](#double) | optional |  |
| completion_percent | [double](#double) | optional |  |
| original_length | [double](#double) | optional |  |
| coop_size | [uint32](#uint32) | optional |  |
| solo | [bool](#bool) | optional |  |
| soul_power | [double](#double) | optional |  |
| last_contribution_time | [double](#double) | optional |  |
| completion_time | [double](#double) | optional |  |
| chicken_runs_sent | [uint32](#uint32) | optional |  |
| gift_tokens_sent | [uint32](#uint32) | optional |  |
| gift_tokens_received | [uint32](#uint32) | optional |  |
| gift_token_value_sent | [double](#double) | optional |  |
| gift_token_value_received | [double](#double) | optional |  |
| boost_token_allotment | [uint32](#uint32) | optional |  |
| buff_time_value | [double](#double) | optional |  |
| teamwork_score | [double](#double) | optional |  |
| other_bonuses | [double](#double) | optional |  |
| counted_in_season | [bool](#bool) | optional |  |
| season_id | [string](#string) | optional |  |
| time_cheats | [uint32](#uint32) | optional |  |
| issues | [ContractEvaluation.PoorBehavior](#ei-ContractEvaluation-PoorBehavior) | repeated |  |
| notes | [string](#string) | repeated |  |
| version | [string](#string) | optional |  |
| evaluation_start_time | [double](#double) | optional |  |
| status | [ContractEvaluation.Status](#ei-ContractEvaluation-Status) | optional |  |






<a name="ei-ContractEvaluationBatch"></a>

### ContractEvaluationBatch



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| evals | [ContractEvaluationBatch.Pair](#ei-ContractEvaluationBatch-Pair) | repeated |  |






<a name="ei-ContractEvaluationBatch-Pair"></a>

### ContractEvaluationBatch.Pair



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| cev | [ContractEvaluation](#ei-ContractEvaluation) | optional |  |






<a name="ei-ContractPlayerInfo"></a>

### ContractPlayerInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| total_cxp | [double](#double) | optional |  |
| season_cxp | [double](#double) | optional |  |
| grade_score | [double](#double) | optional |  |
| target_grade_score | [double](#double) | optional |  |
| soul_power | [double](#double) | optional |  |
| target_soul_power | [double](#double) | optional |  |
| grade_progress | [double](#double) | optional |  |
| issues | [ContractEvaluation.PoorBehavior](#ei-ContractEvaluation-PoorBehavior) | repeated |  |
| issue_score | [double](#double) | optional |  |
| status | [ContractPlayerInfo.Status](#ei-ContractPlayerInfo-Status) | optional |  |
| last_evaluation_time | [double](#double) | optional |  |
| last_evaluation_version | [string](#string) | optional |  |
| unread_evaluations | [ContractEvaluation](#ei-ContractEvaluation) | repeated |  |






<a name="ei-ContractSimConfig"></a>

### ContractSimConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grade_configs | [ContractSimConfig.ContractGradeSimConfig](#ei-ContractSimConfig-ContractGradeSimConfig) | repeated |  |






<a name="ei-ContractSimConfig-ContractGradeSimConfig"></a>

### ContractSimConfig.ContractGradeSimConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| goal_params | [ContractSimConfig.ContractGradeSimConfig.GoalParams](#ei-ContractSimConfig-ContractGradeSimConfig-GoalParams) | repeated |  |






<a name="ei-ContractSimConfig-ContractGradeSimConfig-GoalParams"></a>

### ContractSimConfig.ContractGradeSimConfig.GoalParams



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| target_se | [double](#double) | optional |  |
| cps_mult | [double](#double) | optional |  |
| elr_mult | [double](#double) | optional |  |
| earnings_mult | [double](#double) | optional |  |
| time_efficacy | [double](#double) | optional |  |
| hab_capacity_mult | [double](#double) | optional |  |
| epic_research_budget | [double](#double) | optional |  |






<a name="ei-ContractSimPoll"></a>

### ContractSimPoll



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-ContractSimPollResponse"></a>

### ContractSimPollResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contract_to_simulate | [Contract](#ei-Contract) | optional |  |
| sim_config | [ContractSimConfig](#ei-ContractSimConfig) | optional |  |






<a name="ei-ContractSimResultUpdate"></a>

### ContractSimResultUpdate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contract_id | [string](#string) | optional |  |
| goal_infos | [ContractSimResultUpdate.GoalInfo](#ei-ContractSimResultUpdate-GoalInfo) | repeated |  |






<a name="ei-ContractSimResultUpdate-GoalInfo"></a>

### ContractSimResultUpdate.GoalInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| goal_index | [uint32](#uint32) | optional |  |
| projected_eggs_laid | [double](#double) | optional |  |






<a name="ei-ContractsArchive"></a>

### ContractsArchive



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| archive | [LocalContract](#ei-LocalContract) | repeated |  |






<a name="ei-ContractsRequest"></a>

### ContractsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| soul_eggs | [double](#double) | optional |  |
| client_version | [uint32](#uint32) | optional |  |
| user_id | [string](#string) | optional |  |






<a name="ei-ContractsResponse"></a>

### ContractsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contracts | [Contract](#ei-Contract) | repeated |  |
| warning_message | [string](#string) | optional |  |
| total_eop | [double](#double) | optional |  |
| server_time | [double](#double) | optional |  |
| max_eop | [uint32](#uint32) | optional |  Default: 1000 |






<a name="ei-CoopBuffHistory"></a>

### CoopBuffHistory



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| history | [CoopBuffState](#ei-CoopBuffState) | repeated |  |






<a name="ei-CoopBuffState"></a>

### CoopBuffState



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| egg_laying_rate | [double](#double) | optional |  Default: 1 |
| earnings | [double](#double) | optional |  Default: 1 |
| server_timestamp | [double](#double) | optional |  |






<a name="ei-CoopChickenRunEntry"></a>

### CoopChickenRunEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| server_timestamp | [double](#double) | optional |  |






<a name="ei-CoopCompletionSnapshot"></a>

### CoopCompletionSnapshot



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contributors | [CoopCompletionSnapshot.ContributorSnapshot](#ei-CoopCompletionSnapshot-ContributorSnapshot) | repeated |  |






<a name="ei-CoopCompletionSnapshot-ContributorSnapshot"></a>

### CoopCompletionSnapshot.ContributorSnapshot



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contribution | [double](#double) | optional |  |
| last_contribution_time | [double](#double) | optional |  |
| finalized | [bool](#bool) | optional |  |
| soul_power | [double](#double) | optional |  |
| user_id | [string](#string) | optional |  |
| tokens | [uint32](#uint32) | optional |  |
| tokens_spent | [uint32](#uint32) | optional |  |






<a name="ei-CoopLastChickenRunTimes"></a>

### CoopLastChickenRunTimes



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| entries | [CoopChickenRunEntry](#ei-CoopChickenRunEntry) | repeated |  |






<a name="ei-CraftArtifactRequest"></a>

### CraftArtifactRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| ei_user_id | [string](#string) | optional |  |
| spec | [ArtifactSpec](#ei-ArtifactSpec) | optional |  |
| item_id | [uint64](#uint64) | optional |  |
| gold_price_paid | [double](#double) | optional |  |
| crafting_count | [uint32](#uint32) | optional |  |
| crafting_xp | [double](#double) | optional |  |
| ingredients | [ArtifactInventoryItem](#ei-ArtifactInventoryItem) | repeated |  |






<a name="ei-CraftArtifactResponse"></a>

### CraftArtifactResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item_id | [uint64](#uint64) | optional |  |
| ei_user_id | [string](#string) | optional |  |
| rarity_achieved | [ArtifactSpec.Rarity](#ei-ArtifactSpec-Rarity) | optional |  Default: COMMON |
| server_id | [string](#string) | optional |  |






<a name="ei-CreateCoopRequest"></a>

### CreateCoopRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| public | [bool](#bool) | optional |  |
| cc_only | [bool](#bool) | optional |  |
| allow_all_grades | [bool](#bool) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| user_id | [string](#string) | optional |  |
| user_name | [string](#string) | optional |  |
| soul_power | [double](#double) | optional |  |
| eop | [double](#double) | optional |  |
| league | [uint32](#uint32) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| points_replay | [bool](#bool) | optional |  |
| platform | [Platform](#ei-Platform) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-CreateCoopResponse"></a>

### CreateCoopResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) | optional |  |
| message | [string](#string) | optional |  |






<a name="ei-CurrencyFlowBatchRequest"></a>

### CurrencyFlowBatchRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| logs | [CurrencyFlowLog](#ei-CurrencyFlowLog) | repeated |  |






<a name="ei-CurrencyFlowLog"></a>

### CurrencyFlowLog



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| approx_time | [double](#double) | optional |  |
| currency | [RewardType](#ei-RewardType) | optional |  |
| amount | [int64](#int64) | optional |  |
| location | [string](#string) | optional |  |
| version | [string](#string) | optional |  |
| platform | [string](#string) | optional |  |
| soul_eggs | [double](#double) | optional |  |
| tickets_spent | [uint64](#uint64) | optional |  |
| gold_spent | [uint64](#uint64) | optional |  |






<a name="ei-DLCCatalog"></a>

### DLCCatalog



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| items | [DLCItem](#ei-DLCItem) | repeated |  |
| shells | [ShellSpec](#ei-ShellSpec) | repeated |  |
| shell_sets | [ShellSetSpec](#ei-ShellSetSpec) | repeated |  |
| decorators | [ShellSetSpec](#ei-ShellSetSpec) | repeated |  |
| shell_objects | [ShellObjectSpec](#ei-ShellObjectSpec) | repeated |  |
| shell_groups | [ShellGroupSpec](#ei-ShellGroupSpec) | repeated |  |






<a name="ei-DLCItem"></a>

### DLCItem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) | optional |  |
| directory | [string](#string) | optional |  |
| ext | [string](#string) | optional |  |
| compressed | [bool](#bool) | optional |  |
| original_size | [uint64](#uint64) | optional |  |
| url | [string](#string) | optional |  |
| checksum | [string](#string) | optional |  |






<a name="ei-DailyGiftInfo"></a>

### DailyGiftInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_day | [uint32](#uint32) | optional |  |
| seconds_to_next_day | [double](#double) | optional |  |






<a name="ei-DeviceInfo"></a>

### DeviceInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| device_id | [string](#string) | optional |  |
| advertising_id | [string](#string) | optional |  |
| platform | [string](#string) | optional |  |
| form_factor | [string](#string) | optional |  |
| device_name | [string](#string) | optional |  |
| platform_version | [string](#string) | optional |  |
| locale_country | [string](#string) | optional |  |
| locale_language | [string](#string) | optional |  |
| gpu_vendor | [string](#string) | optional |  |
| gpu_model | [string](#string) | optional |  |
| device_bucket | [string](#string) | optional |  |
| screen_width | [uint32](#uint32) | optional |  |
| screen_height | [uint32](#uint32) | optional |  |






<a name="ei-EggIncAdConfig"></a>

### EggIncAdConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| network_priority | [AdNetwork](#ei-AdNetwork) | repeated |  |






<a name="ei-EggIncCurrentEvents"></a>

### EggIncCurrentEvents



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| events | [EggIncEvent](#ei-EggIncEvent) | repeated |  |






<a name="ei-EggIncEvent"></a>

### EggIncEvent



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| type | [string](#string) | optional |  |
| multiplier | [double](#double) | optional |  |
| subtitle | [string](#string) | optional |  |
| start_time | [double](#double) | optional |  |
| duration | [double](#double) | optional |  |
| cc_only | [bool](#bool) | optional |  |






<a name="ei-EggIncFirstContactRequest"></a>

### EggIncFirstContactRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| ei_user_id | [string](#string) | optional |  |
| user_id | [string](#string) | optional |  |
| game_services_id | [string](#string) | optional |  |
| device_id | [string](#string) | optional |  |
| username | [string](#string) | optional |  |
| client_version | [uint32](#uint32) | optional |  |
| platform | [Platform](#ei-Platform) | optional |  |






<a name="ei-EggIncFirstContactResponse"></a>

### EggIncFirstContactResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ei_user_id | [string](#string) | optional |  |
| ids_transferred | [string](#string) | repeated |  |
| error_code | [uint32](#uint32) | optional |  Default: 0 |
| error_message | [string](#string) | optional |  |
| backup | [Backup](#ei-Backup) | optional |  |






<a name="ei-FarmProductionParams"></a>

### FarmProductionParams



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| farm_population | [double](#double) | optional |  |
| farm_capacity | [double](#double) | optional |  |
| elr | [double](#double) | optional |  |
| ihr | [double](#double) | optional |  |
| sr | [double](#double) | optional |  |
| delivered | [double](#double) | optional |  |






<a name="ei-GameModifier"></a>

### GameModifier



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dimension | [GameModifier.GameDimension](#ei-GameModifier-GameDimension) | optional |  |
| value | [double](#double) | optional |  |
| description | [string](#string) | optional |  |






<a name="ei-GenericAction"></a>

### GenericAction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| cc_user | [bool](#bool) | optional |  |
| advertising_id | [string](#string) | optional |  |
| approx_time_DEP | [float](#float) | optional |  |
| approx_time | [double](#double) | optional |  |
| action_name | [string](#string) | optional |  |
| data | [ActionKeyValuePair](#ei-ActionKeyValuePair) | repeated |  |
| app | [AppInfo](#ei-AppInfo) | optional |  |
| device | [DeviceInfo](#ei-DeviceInfo) | optional |  |






<a name="ei-GenericActionBatchRequest"></a>

### GenericActionBatchRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| actions | [GenericAction](#ei-GenericAction) | repeated |  |






<a name="ei-GetPeriodicalsRequest"></a>

### GetPeriodicalsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| user_id | [string](#string) | optional |  |
| piggy_full | [bool](#bool) | optional |  |
| piggy_found_full | [bool](#bool) | optional |  |
| seconds_full_realtime | [double](#double) | optional |  |
| seconds_full_gametime | [double](#double) | optional |  |
| lost_increments | [uint32](#uint32) | optional |  |
| soul_eggs | [double](#double) | optional |  |
| mystical_earnings_mult | [double](#double) | optional |  |
| eop | [uint32](#uint32) | optional |  |
| contracts_unlocked | [bool](#bool) | optional |  |
| artifacts_unlocked | [bool](#bool) | optional |  |
| current_client_version | [uint32](#uint32) | optional |  |
| debug | [bool](#bool) | optional |  |






<a name="ei-GiftPlayerCoopRequest"></a>

### GiftPlayerCoopRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| player_identifier | [string](#string) | optional |  |
| requesting_user_id | [string](#string) | optional |  |
| requesting_user_name | [string](#string) | optional |  |
| amount | [uint32](#uint32) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-IAPSaleEntry"></a>

### IAPSaleEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| product_id | [string](#string) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| discount_string | [string](#string) | optional |  |
| sale_id | [string](#string) | optional |  |






<a name="ei-InGameMail"></a>

### InGameMail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| title | [string](#string) | optional |  |
| date | [string](#string) | optional |  |
| message | [string](#string) | optional |  |
| action | [string](#string) | optional |  |
| url | [string](#string) | optional |  |
| app_link | [UILocation](#ei-UILocation) | optional |  |
| app_link_extra | [string](#string) | optional |  |
| image | [DLCItem](#ei-DLCItem) | optional |  |
| image_width | [double](#double) | optional |  |
| image_height | [double](#double) | optional |  |
| platform | [uint32](#uint32) | optional |  |
| builds | [string](#string) | repeated |  |
| min_client_version | [uint32](#uint32) | optional |  |
| max_client_version | [uint32](#uint32) | optional |  |
| min_soul_eggs | [double](#double) | optional |  |
| min_mystical_bonus | [double](#double) | optional |  |
| user_type | [UserType](#ei-UserType) | optional |  |
| min_piggy_breaks | [uint32](#uint32) | optional |  |
| gold_tip | [double](#double) | optional |  |
| tip | [bool](#bool) | optional |  |
| priority | [uint32](#uint32) | optional |  |
| min_days_since_last_tip | [double](#double) | optional |  |
| max_retries | [uint32](#uint32) | optional |  |
| days_until_retry | [double](#double) | optional |  |
| category | [string](#string) | optional |  |






<a name="ei-InventorySlot"></a>

### InventorySlot



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| occupied | [bool](#bool) | optional |  |
| item_id | [uint32](#uint32) | optional |  |






<a name="ei-JoinCoopRequest"></a>

### JoinCoopRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| user_id | [string](#string) | optional |  |
| user_name | [string](#string) | optional |  |
| soul_power | [double](#double) | optional |  |
| eop | [double](#double) | optional |  |
| league | [uint32](#uint32) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| points_replay | [bool](#bool) | optional |  |
| platform | [Platform](#ei-Platform) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-JoinCoopResponse"></a>

### JoinCoopResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) | optional |  |
| message | [string](#string) | optional |  |
| banned | [bool](#bool) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| match_percent | [double](#double) | optional |  |
| num_members | [uint32](#uint32) | optional |  |
| status | [ContractCoopStatusResponse.Status](#ei-ContractCoopStatusResponse-Status) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| can_start | [bool](#bool) | optional |  |






<a name="ei-KickPlayerCoopRequest"></a>

### KickPlayerCoopRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| player_identifier | [string](#string) | optional |  |
| requesting_user_id | [string](#string) | optional |  |
| reason | [KickPlayerCoopRequest.Reason](#ei-KickPlayerCoopRequest-Reason) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-LeaderboardAnalysis"></a>

### LeaderboardAnalysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chunks | [LeaderboardAnalysis.Chunk](#ei-LeaderboardAnalysis-Chunk) | repeated |  |
| count | [uint32](#uint32) | optional |  |
| high_score | [double](#double) | optional |  |
| low_score | [double](#double) | optional |  |
| cursor | [string](#string) | optional |  |






<a name="ei-LeaderboardAnalysis-Chunk"></a>

### LeaderboardAnalysis.Chunk



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| start_index | [uint32](#uint32) | optional |  |
| end_index | [uint32](#uint32) | optional |  |
| high_score | [double](#double) | optional |  |
| low_score | [double](#double) | optional |  |
| start_cursor | [string](#string) | optional |  |
| end_cursor | [string](#string) | optional |  |






<a name="ei-LeaderboardInfo"></a>

### LeaderboardInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| seasons | [LeaderboardInfo.Season](#ei-LeaderboardInfo-Season) | repeated |  |
| all_time_scope | [string](#string) | optional |  |






<a name="ei-LeaderboardInfo-Season"></a>

### LeaderboardInfo.Season



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scope | [string](#string) | optional |  |
| name | [string](#string) | optional |  |






<a name="ei-LeaderboardRequest"></a>

### LeaderboardRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| scope | [string](#string) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |






<a name="ei-LeaderboardResponse"></a>

### LeaderboardResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scope | [string](#string) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| top_entries | [LeaderboardResponse.Entry](#ei-LeaderboardResponse-Entry) | repeated |  |
| count | [uint32](#uint32) | optional |  |
| rank | [uint32](#uint32) | optional |  |
| score | [double](#double) | optional |  |






<a name="ei-LeaderboardResponse-Entry"></a>

### LeaderboardResponse.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rank | [uint32](#uint32) | optional |  |
| alias | [string](#string) | optional |  |
| score | [double](#double) | optional |  |






<a name="ei-LeaveCoopRequest"></a>

### LeaveCoopRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| player_identifier | [string](#string) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-LiveConfig"></a>

### LiveConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| config_id | [string](#string) | optional |  |
| boosts_config | [LiveConfig.BoostsConfig](#ei-LiveConfig-BoostsConfig) | optional |  |
| gift_config | [LiveConfig.GiftConfig](#ei-LiveConfig-GiftConfig) | optional |  |
| misc_config | [LiveConfig.MiscConfig](#ei-LiveConfig-MiscConfig) | optional |  |






<a name="ei-LiveConfig-BoostsConfig"></a>

### LiveConfig.BoostsConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item_configs | [LiveConfig.BoostsConfig.ItemConfig](#ei-LiveConfig-BoostsConfig-ItemConfig) | repeated |  |
| cash_boost_cooloff_time | [double](#double) | optional |  |






<a name="ei-LiveConfig-BoostsConfig-ItemConfig"></a>

### LiveConfig.BoostsConfig.ItemConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| boost_id | [string](#string) | optional |  |
| price | [uint32](#uint32) | optional |  |
| token_price | [uint32](#uint32) | optional |  |
| se_required | [double](#double) | optional |  |






<a name="ei-LiveConfig-GiftConfig"></a>

### LiveConfig.GiftConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gift_configs | [LiveConfig.GiftConfig.GiftValueConfig](#ei-LiveConfig-GiftConfig-GiftValueConfig) | repeated |  |
| gift_mu_min_spent | [double](#double) | optional |  |
| gift_mu_max_spent | [double](#double) | optional |  |
| gift_mu_overall_mult | [double](#double) | optional |  |
| random_gift_mu_config | [LiveConfig.GiftConfig.GiftMuConfig](#ei-LiveConfig-GiftConfig-GiftMuConfig) | optional |  |
| video_gift_mu_config | [LiveConfig.GiftConfig.GiftMuConfig](#ei-LiveConfig-GiftConfig-GiftMuConfig) | optional |  |
| package_interval | [double](#double) | optional |  |
| video_offer_interval | [double](#double) | optional |  |
| video_offer_interval_contract | [double](#double) | optional |  |
| video_offer_interval_piggy_full | [double](#double) | optional |  |
| video_offer_interval_piggy_extra_full | [double](#double) | optional |  |
| video_reset_on_idle | [bool](#bool) | optional |  |
| package_interval_contract | [double](#double) | optional |  |
| package_interval_piggy_full | [double](#double) | optional |  |
| package_interval_piggy_extra_full | [double](#double) | optional |  |
| package_reset_on_idle | [bool](#bool) | optional |  |






<a name="ei-LiveConfig-GiftConfig-GiftMuConfig"></a>

### LiveConfig.GiftConfig.GiftMuConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_spent | [double](#double) | optional |  |
| max_spent | [double](#double) | optional |  |
| overall_mult | [double](#double) | optional |  |






<a name="ei-LiveConfig-GiftConfig-GiftValueConfig"></a>

### LiveConfig.GiftConfig.GiftValueConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gift_id | [string](#string) | optional |  |
| amount | [double](#double) | optional |  |
| rand_min | [double](#double) | optional |  |
| rand_max | [double](#double) | optional |  |
| video_min | [double](#double) | optional |  |
| video_max | [double](#double) | optional |  |






<a name="ei-LiveConfig-MiscConfig"></a>

### LiveConfig.MiscConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ask_to_track | [bool](#bool) | optional |  |
| ask_to_track_min_soul_eggs | [double](#double) | optional |  |
| ask_to_track_message | [string](#string) | optional |  |
| ask_to_track_show_pre_dialog | [bool](#bool) | optional |  |
| ask_to_track_after_privacy | [bool](#bool) | optional |  |
| chicken_run_boost_percentage | [double](#double) | optional |  |
| shells_intro_tickets | [uint32](#uint32) | optional |  |
| shells_max_free_chicken_configs | [uint32](#uint32) | optional |  |
| shells_intro_alert_threshold | [uint32](#uint32) | optional |  |
| shells_lighting_controls_price | [uint32](#uint32) | optional |  Default: 175 |
| contracts_expert_league_min_soul_power | [double](#double) | optional |  |
| new_player_event_duration | [double](#double) | optional |  |
| contracts_club_available | [bool](#bool) | optional |  |
| contracts_beta | [bool](#bool) | optional |  |






<a name="ei-LocalContract"></a>

### LocalContract



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contract | [Contract](#ei-Contract) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| accepted | [bool](#bool) | optional |  |
| time_accepted | [double](#double) | optional |  |
| cancelled | [bool](#bool) | optional |  |
| new | [bool](#bool) | optional |  |
| coop_shared_end_time | [double](#double) | optional |  |
| coop_simulation_end_time | [double](#double) | optional |  |
| coop_grace_period_end_time | [double](#double) | optional |  |
| coop_contribution_finalized | [bool](#bool) | optional |  |
| coop_last_uploaded_contribution | [double](#double) | optional |  |
| coop_user_id | [string](#string) | optional |  |
| coop_share_farm | [bool](#bool) | optional |  |
| last_amount_when_reward_given | [double](#double) | optional |  |
| num_goals_achieved | [uint32](#uint32) | optional |  |
| boosts_used | [uint32](#uint32) | optional |  |
| points_replay | [bool](#bool) | optional |  |
| league | [uint32](#uint32) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| last_nag_time | [double](#double) | optional |  |
| evaluation | [ContractEvaluation](#ei-ContractEvaluation) | optional |  |
| reported_uuids | [string](#string) | repeated |  |






<a name="ei-LogCompleteMissionPayload"></a>

### LogCompleteMissionPayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| req | [MissionRequest](#ei-MissionRequest) | optional |  |
| res | [CompleteMissionResponse](#ei-CompleteMissionResponse) | optional |  |






<a name="ei-LogConsumeArtifactPayload"></a>

### LogConsumeArtifactPayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| req | [ConsumeArtifactRequest](#ei-ConsumeArtifactRequest) | optional |  |
| res | [ConsumeArtifactResponse](#ei-ConsumeArtifactResponse) | optional |  |






<a name="ei-LogCraftArtifactPayload"></a>

### LogCraftArtifactPayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| req | [CraftArtifactRequest](#ei-CraftArtifactRequest) | optional |  |
| res | [CraftArtifactResponse](#ei-CraftArtifactResponse) | optional |  |






<a name="ei-LogSetArtifactPayload"></a>

### LogSetArtifactPayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| req | [SetArtifactRequest](#ei-SetArtifactRequest) | optional |  |
| res | [SetArtifactResponse](#ei-SetArtifactResponse) | optional |  |






<a name="ei-MailDB"></a>

### MailDB



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mail | [InGameMail](#ei-InGameMail) | repeated |  |
| tips_db_data | [bytes](#bytes) | optional |  |
| tips_checksum | [string](#string) | optional |  |






<a name="ei-MailState"></a>

### MailState



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| read_mail_ids | [string](#string) | repeated |  |
| tips_states | [MailState.TipState](#ei-MailState-TipState) | repeated |  |
| tips_checksum | [string](#string) | optional |  |






<a name="ei-MailState-TipState"></a>

### MailState.TipState



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| reads | [uint32](#uint32) | optional |  |
| time_read | [double](#double) | optional |  |






<a name="ei-MissionInfo"></a>

### MissionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ship | [MissionInfo.Spaceship](#ei-MissionInfo-Spaceship) | optional |  |
| status | [MissionInfo.Status](#ei-MissionInfo-Status) | optional |  |
| duration_type | [MissionInfo.DurationType](#ei-MissionInfo-DurationType) | optional |  |
| fuel | [MissionInfo.Fuel](#ei-MissionInfo-Fuel) | repeated |  |
| level | [uint32](#uint32) | optional |  |
| duration_seconds | [double](#double) | optional |  |
| capacity | [uint32](#uint32) | optional |  |
| quality_bump | [double](#double) | optional |  |
| target_artifact | [ArtifactSpec.Name](#ei-ArtifactSpec-Name) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| start_time_derived | [double](#double) | optional |  |
| mission_log | [string](#string) | optional |  |
| identifier | [string](#string) | optional |  |






<a name="ei-MissionInfo-Fuel"></a>

### MissionInfo.Fuel



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| egg | [Egg](#ei-Egg) | optional |  |
| amount | [double](#double) | optional |  |






<a name="ei-MissionRequest"></a>

### MissionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| client_version | [uint32](#uint32) | optional |  |
| ei_user_id | [string](#string) | optional |  |
| info | [MissionInfo](#ei-MissionInfo) | optional |  |
| client_info | [ArtifactsClientInfo](#ei-ArtifactsClientInfo) | optional |  |






<a name="ei-MissionResponse"></a>

### MissionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) | optional |  |
| info | [MissionInfo](#ei-MissionInfo) | optional |  |






<a name="ei-MyContracts"></a>

### MyContracts



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contract_ids_seen | [string](#string) | repeated |  |
| contracts | [LocalContract](#ei-LocalContract) | repeated |  |
| archive | [LocalContract](#ei-LocalContract) | repeated |  |
| current_coop_statuses | [ContractCoopStatusResponse](#ei-ContractCoopStatusResponse) | repeated |  |
| last_cpi | [ContractPlayerInfo](#ei-ContractPlayerInfo) | optional |  |
| initial_grade_revealed | [bool](#bool) | optional |  |
| last_grade_progress_shown | [double](#double) | optional |  |
| show_advanced_evaluations | [bool](#bool) | optional |  |






<a name="ei-PeriodicalsResponse"></a>

### PeriodicalsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sales | [SalesInfo](#ei-SalesInfo) | optional |  |
| events | [EggIncCurrentEvents](#ei-EggIncCurrentEvents) | optional |  |
| contracts | [ContractsResponse](#ei-ContractsResponse) | optional |  |
| evaluations | [ContractEvaluation](#ei-ContractEvaluation) | repeated |  |
| gifts | [ServerGift](#ei-ServerGift) | repeated |  |
| artifact_cases | [CompleteMissionResponse](#ei-CompleteMissionResponse) | repeated |  |
| live_config | [LiveConfig](#ei-LiveConfig) | optional |  |
| mail_bag | [MailDB](#ei-MailDB) | optional |  |
| contract_player_info | [ContractPlayerInfo](#ei-ContractPlayerInfo) | optional |  |
| showcase_royalties | [PeriodicalsResponse.RoyaltyInfo](#ei-PeriodicalsResponse-RoyaltyInfo) | repeated |  |






<a name="ei-PeriodicalsResponse-RoyaltyInfo"></a>

### PeriodicalsResponse.RoyaltyInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| amount | [uint32](#uint32) | optional |  |






<a name="ei-PlayerFarmInfo"></a>

### PlayerFarmInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| client_version | [uint32](#uint32) | optional |  |
| soul_eggs | [double](#double) | optional |  |
| eggs_of_prophecy | [uint64](#uint64) | optional |  |
| permit_level | [uint32](#uint32) | optional |  |
| hyperloop_station | [bool](#bool) | optional |  |
| egg_medal_level | [uint32](#uint32) | repeated |  |
| epic_research | [Backup.ResearchItem](#ei-Backup-ResearchItem) | repeated |  |
| egg_type | [Egg](#ei-Egg) | optional |  |
| cash_on_hand | [double](#double) | optional |  |
| habs | [uint32](#uint32) | repeated |  |
| hab_population | [uint64](#uint64) | repeated |  |
| hab_capacity | [uint64](#uint64) | repeated |  |
| vehicles | [uint32](#uint32) | repeated |  |
| train_length | [uint32](#uint32) | repeated |  |
| silos_owned | [uint32](#uint32) | optional |  |
| common_research | [Backup.ResearchItem](#ei-Backup-ResearchItem) | repeated |  |
| active_boosts | [Backup.ActiveBoost](#ei-Backup-ActiveBoost) | repeated |  |
| boost_tokens_on_hand | [uint32](#uint32) | optional |  |
| equipped_artifacts | [CompleteArtifact](#ei-CompleteArtifact) | repeated |  |
| artifact_inventory_score | [uint64](#uint64) | optional |  |
| farm_appearance | [ShellDB.FarmConfiguration](#ei-ShellDB-FarmConfiguration) | optional |  |
| timestamp | [double](#double) | optional |  |






<a name="ei-QueryCoopRequest"></a>

### QueryCoopRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| league | [uint32](#uint32) | optional |  |
| grade | [Contract.PlayerGrade](#ei-Contract-PlayerGrade) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-QueryCoopResponse"></a>

### QueryCoopResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exists | [bool](#bool) | optional |  |
| full | [bool](#bool) | optional |  |
| expired | [bool](#bool) | optional |  |
| different_league | [bool](#bool) | optional |  |
| different_grade | [bool](#bool) | optional |  |
| cc_only | [bool](#bool) | optional |  |
| banned | [bool](#bool) | optional |  |






<a name="ei-ReportPlayerCoopRequest"></a>

### ReportPlayerCoopRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| user_id | [string](#string) | optional |  |
| reason | [ReportPlayerCoopRequest.Reason](#ei-ReportPlayerCoopRequest-Reason) | optional |  |






<a name="ei-ReturnEDTPayload"></a>

### ReturnEDTPayload



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ei_user_id | [string](#string) | optional |  |






<a name="ei-Reward"></a>

### Reward



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reward_type | [RewardType](#ei-RewardType) | optional |  |
| reward_sub_type | [string](#string) | optional |  |
| reward_amount | [double](#double) | optional |  |






<a name="ei-SalesInfo"></a>

### SalesInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sales | [IAPSaleEntry](#ei-IAPSaleEntry) | repeated |  |






<a name="ei-SalesInfoRequest"></a>

### SalesInfoRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| piggy_full | [bool](#bool) | optional |  |
| piggy_found_full | [bool](#bool) | optional |  |
| seconds_full_realtime | [double](#double) | optional |  |
| seconds_full_gametime | [double](#double) | optional |  |
| lost_increments | [uint32](#uint32) | optional |  |
| current_client_version | [uint32](#uint32) | optional |  |






<a name="ei-SaveBackupResponse"></a>

### SaveBackupResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) | optional |  |
| error_code | [uint32](#uint32) | optional |  |
| message | [string](#string) | optional |  |
| existing_backup | [Backup](#ei-Backup) | optional |  |






<a name="ei-SendChickenRunCoopRequest"></a>

### SendChickenRunCoopRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| player_identifier | [string](#string) | optional |  |
| requesting_user_id | [string](#string) | optional |  |
| requesting_user_name | [string](#string) | optional |  |
| farm_pop | [uint64](#uint64) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-ServerGift"></a>

### ServerGift



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| user_id | [string](#string) | optional |  |
| reward_type | [RewardType](#ei-RewardType) | optional |  |
| reward_sub_type | [string](#string) | optional |  |
| reward_amount | [double](#double) | optional |  |






<a name="ei-SetArtifactRequest"></a>

### SetArtifactRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| artifact | [ArtifactInventoryItem](#ei-ArtifactInventoryItem) | optional |  |
| stones | [ArtifactSpec](#ei-ArtifactSpec) | repeated |  |
| gold_price_paid | [double](#double) | optional |  |






<a name="ei-SetArtifactResponse"></a>

### SetArtifactResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) | optional |  |
| original_item_id | [uint64](#uint64) | optional |  |
| ei_user_id | [string](#string) | optional |  |






<a name="ei-ShellDB"></a>

### ShellDB



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shell_inventory | [ShellDB.ShellStatus](#ei-ShellDB-ShellStatus) | repeated |  |
| shell_element_inventory | [ShellDB.ShellElementStatus](#ei-ShellDB-ShellElementStatus) | repeated |  |
| shell_variation_inventory | [ShellDB.ShellSetVariationStatus](#ei-ShellDB-ShellSetVariationStatus) | repeated |  |
| shell_set_inventory | [ShellDB.ShellStatus](#ei-ShellDB-ShellStatus) | repeated |  |
| shell_object_inventory | [ShellDB.ShellStatus](#ei-ShellDB-ShellStatus) | repeated |  |
| farm_configs | [ShellDB.FarmConfiguration](#ei-ShellDB-FarmConfiguration) | repeated |  |
| saved_configs | [ShellDB.SavedFarmConfiguration](#ei-ShellDB-SavedFarmConfiguration) | repeated |  |
| new_shells_downloaded | [string](#string) | repeated |  |
| new_shells_seen | [string](#string) | repeated |  |
| lighting_controls_unlocked | [bool](#bool) | optional |  |






<a name="ei-ShellDB-ChickenConfig"></a>

### ShellDB.ChickenConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chicken_identifier | [string](#string) | optional |  |
| hat_identifier | [string](#string) | optional |  |






<a name="ei-ShellDB-FarmConfiguration"></a>

### ShellDB.FarmConfiguration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| locked_elements | [ShellDB.FarmElement](#ei-ShellDB-FarmElement) | repeated |  |
| shell_configs | [ShellDB.ShellConfiguration](#ei-ShellDB-ShellConfiguration) | repeated |  |
| shell_set_configs | [ShellDB.ShellSetConfiguration](#ei-ShellDB-ShellSetConfiguration) | repeated |  |
| configure_chickens_by_group | [bool](#bool) | optional |  |
| group_configs | [ShellDB.ShellGroupConfiguration](#ei-ShellDB-ShellGroupConfiguration) | repeated |  |
| chicken_configs | [ShellDB.ChickenConfig](#ei-ShellDB-ChickenConfig) | repeated |  |
| lighting_config_enabled | [bool](#bool) | optional |  |
| lighting_config | [ShellDB.LightingConfig](#ei-ShellDB-LightingConfig) | optional |  |






<a name="ei-ShellDB-LightingConfig"></a>

### ShellDB.LightingConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| light_dir | [Vector3](#ei-Vector3) | optional |  |
| light_direct_color | [Vector4](#ei-Vector4) | optional |  |
| light_direct_intensity | [float](#float) | optional |  |
| light_ambient_color | [Vector4](#ei-Vector4) | optional |  |
| light_ambient_intensity | [float](#float) | optional |  |
| fog_color | [Vector4](#ei-Vector4) | optional |  |
| fog_near | [float](#float) | optional |  |
| fog_far | [float](#float) | optional |  |
| fog_density | [float](#float) | optional |  |






<a name="ei-ShellDB-SavedFarmConfiguration"></a>

### ShellDB.SavedFarmConfiguration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| config | [ShellDB.FarmConfiguration](#ei-ShellDB-FarmConfiguration) | optional |  |
| client_save_time | [double](#double) | optional |  |
| server_id | [string](#string) | optional |  |
| display_name | [string](#string) | optional |  |
| purchased | [bool](#bool) | optional |  |






<a name="ei-ShellDB-ShellConfiguration"></a>

### ShellDB.ShellConfiguration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_type | [ShellSpec.AssetType](#ei-ShellSpec-AssetType) | optional |  |
| index | [uint32](#uint32) | optional |  |
| shell_identifier | [string](#string) | optional |  |






<a name="ei-ShellDB-ShellElementStatus"></a>

### ShellDB.ShellElementStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| element | [ShellDB.FarmElement](#ei-ShellDB-FarmElement) | optional |  |
| set_identifier | [string](#string) | optional |  |






<a name="ei-ShellDB-ShellGroupConfiguration"></a>

### ShellDB.ShellGroupConfiguration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_type | [ShellSpec.AssetType](#ei-ShellSpec-AssetType) | optional |  |
| group_identifier | [string](#string) | optional |  |






<a name="ei-ShellDB-ShellSetConfiguration"></a>

### ShellDB.ShellSetConfiguration



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| element | [ShellDB.FarmElement](#ei-ShellDB-FarmElement) | optional |  |
| index | [uint32](#uint32) | optional |  |
| shell_set_identifier | [string](#string) | optional |  |
| variation_identifier | [string](#string) | optional |  |
| decorator_identifier | [string](#string) | optional |  |






<a name="ei-ShellDB-ShellSetVariationStatus"></a>

### ShellDB.ShellSetVariationStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| set_identifier | [string](#string) | optional |  |
| owned_variations | [string](#string) | repeated |  |






<a name="ei-ShellDB-ShellStatus"></a>

### ShellDB.ShellStatus



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) | optional |  |
| owned | [bool](#bool) | optional |  |






<a name="ei-ShellGroupSpec"></a>

### ShellGroupSpec



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) | optional |  |
| name | [string](#string) | optional |  |
| asset_type | [ShellSpec.AssetType](#ei-ShellSpec-AssetType) | optional |  |
| member_ids | [string](#string) | repeated |  |
| price_mult_DEPRECATED | [double](#double) | optional |  |






<a name="ei-ShellObjectSpec"></a>

### ShellObjectSpec



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) | optional |  |
| name | [string](#string) | optional |  |
| asset_type | [ShellSpec.AssetType](#ei-ShellSpec-AssetType) | optional |  |
| object_class | [string](#string) | optional |  |
| icon_colors | [string](#string) | repeated |  |
| price | [uint32](#uint32) | optional |  |
| required_eop | [uint32](#uint32) | optional |  |
| required_soul_eggs | [double](#double) | optional |  |
| is_new | [bool](#bool) | optional |  |
| expires | [bool](#bool) | optional |  |
| seconds_until_available | [double](#double) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| popularity | [uint64](#uint64) | optional |  |
| metadata | [double](#double) | repeated |  |
| no_hats | [bool](#bool) | optional |  |
| chicken_animation | [ShellObjectSpec.ChickenAnimation](#ei-ShellObjectSpec-ChickenAnimation) | optional |  |
| sort_priority | [int32](#int32) | optional |  |
| pieces | [ShellObjectSpec.LODPiece](#ei-ShellObjectSpec-LODPiece) | repeated |  |
| default_appearance | [bool](#bool) | optional |  |






<a name="ei-ShellObjectSpec-LODPiece"></a>

### ShellObjectSpec.LODPiece



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dlc | [DLCItem](#ei-DLCItem) | optional |  |
| lod | [uint32](#uint32) | optional |  |






<a name="ei-ShellPopularityStats"></a>

### ShellPopularityStats



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [ShellPopularityStats.Entry](#ei-ShellPopularityStats-Entry) | repeated |  |






<a name="ei-ShellPopularityStats-Entry"></a>

### ShellPopularityStats.Entry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| element | [ShellDB.FarmElement](#ei-ShellDB-FarmElement) | optional |  |
| spent | [uint64](#uint64) | optional |  |
| count | [uint64](#uint64) | optional |  |






<a name="ei-ShellSetSpec"></a>

### ShellSetSpec



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) | optional |  |
| name | [string](#string) | optional |  |
| price | [uint32](#uint32) | optional |  |
| price_mult_DEPRECATED | [double](#double) | optional |  Default: 1 |
| discount | [double](#double) | optional |  |
| required_eop | [uint32](#uint32) | optional |  |
| required_soul_eggs | [double](#double) | optional |  |
| required_parent_set | [string](#string) | optional |  |
| is_new | [bool](#bool) | optional |  |
| expires | [bool](#bool) | optional |  |
| seconds_until_available | [double](#double) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| popularity | [uint64](#uint64) | optional |  |
| decorator | [bool](#bool) | optional |  |
| modified_geometry | [bool](#bool) | optional |  |
| element_set | [bool](#bool) | optional |  |
| hex_base_color | [string](#string) | optional |  |
| variations | [ShellSetSpec.VariationSpec](#ei-ShellSetSpec-VariationSpec) | repeated |  |
| icon | [DLCItem](#ei-DLCItem) | optional |  |
| default_appearance | [bool](#bool) | optional |  |
| custom_appearance | [bool](#bool) | optional |  |






<a name="ei-ShellSetSpec-VariationSpec"></a>

### ShellSetSpec.VariationSpec



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) | optional |  |
| hex_color | [string](#string) | optional |  |
| price | [uint32](#uint32) | optional |  |
| sort_priority | [int32](#int32) | optional |  |
| default_appearance | [bool](#bool) | optional |  |
| custom_appearance | [bool](#bool) | optional |  |






<a name="ei-ShellShowcase"></a>

### ShellShowcase



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| top | [ShellShowcaseListingInfo](#ei-ShellShowcaseListingInfo) | repeated |  |
| featured | [ShellShowcaseListingInfo](#ei-ShellShowcaseListingInfo) | repeated |  |
| fresh | [ShellShowcaseListingInfo](#ei-ShellShowcaseListingInfo) | repeated |  |






<a name="ei-ShellShowcaseListingInfo"></a>

### ShellShowcaseListingInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional |  |
| local_id | [string](#string) | optional |  |
| name | [string](#string) | optional |  |
| description | [string](#string) | optional |  |
| creator_name | [string](#string) | optional |  |
| status | [ShellShowcaseListingInfo.Status](#ei-ShellShowcaseListingInfo-Status) | optional |  |
| farm_config | [ShellDB.FarmConfiguration](#ei-ShellDB-FarmConfiguration) | optional |  |
| sales | [uint32](#uint32) | optional |  |
| gross | [uint64](#uint64) | optional |  |
| views | [uint64](#uint64) | optional |  |
| equips | [uint64](#uint64) | optional |  |
| likes | [uint32](#uint32) | optional |  |
| dislikes | [uint32](#uint32) | optional |  |
| share_url | [string](#string) | optional |  |






<a name="ei-ShellShowcaseListingSet"></a>

### ShellShowcaseListingSet



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| listings | [ShellShowcaseListingInfo](#ei-ShellShowcaseListingInfo) | repeated |  |






<a name="ei-ShellSpec"></a>

### ShellSpec



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) | optional |  |
| primary_piece | [ShellSpec.ShellPiece](#ei-ShellSpec-ShellPiece) | optional |  |
| pieces | [ShellSpec.ShellPiece](#ei-ShellSpec-ShellPiece) | repeated |  |
| alt_assets | [DLCItem](#ei-DLCItem) | repeated |  |
| name | [string](#string) | optional |  |
| set_identifier | [string](#string) | optional |  |
| modified_geometry | [bool](#bool) | optional |  |
| price | [uint32](#uint32) | optional |  |
| required_eop | [uint32](#uint32) | optional |  |
| required_soul_eggs | [double](#double) | optional |  |
| required_parent_shell | [string](#string) | optional |  |
| is_new | [bool](#bool) | optional |  |
| expires | [bool](#bool) | optional |  |
| seconds_until_available | [double](#double) | optional |  |
| seconds_remaining | [double](#double) | optional |  |
| popularity | [uint64](#uint64) | optional |  |
| default_appearance | [bool](#bool) | optional |  |






<a name="ei-ShellSpec-ShellPiece"></a>

### ShellSpec.ShellPiece



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_type | [ShellSpec.AssetType](#ei-ShellSpec-AssetType) | optional |  |
| dlc | [DLCItem](#ei-DLCItem) | optional |  |






<a name="ei-ShellsActionBatch"></a>

### ShellsActionBatch



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| actions | [ShellsActionLog](#ei-ShellsActionLog) | repeated |  |






<a name="ei-ShellsActionLog"></a>

### ShellsActionLog



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| user_id | [string](#string) | optional |  |
| action | [string](#string) | optional |  |
| sub_id | [string](#string) | optional |  |
| farm_element | [ShellDB.FarmElement](#ei-ShellDB-FarmElement) | optional |  |
| cost | [uint32](#uint32) | optional |  |
| approx_time | [double](#double) | optional |  |
| version | [string](#string) | optional |  |
| farm_index | [int32](#int32) | optional |  |
| soul_eggs | [double](#double) | optional |  |
| tickets_spent | [uint64](#uint64) | optional |  |
| gold_spent | [uint64](#uint64) | optional |  |






<a name="ei-ShowcaseRoyaltyDeliveryConfirmation"></a>

### ShowcaseRoyaltyDeliveryConfirmation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| ids | [string](#string) | repeated |  |
| amount | [uint32](#uint32) | optional |  |






<a name="ei-SubmitShellShowcaseRequest"></a>

### SubmitShellShowcaseRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| local_id | [string](#string) | optional |  |
| user_id | [string](#string) | optional |  |
| public_username | [bool](#bool) | optional |  |
| farm_config | [ShellDB.FarmConfiguration](#ei-ShellDB-FarmConfiguration) | optional |  |






<a name="ei-SubscriptionChangeHintRequest"></a>

### SubscriptionChangeHintRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| original_transaction_id | [string](#string) | optional |  |
| next_subscription_level | [UserSubscriptionInfo.Level](#ei-UserSubscriptionInfo-Level) | optional |  |






<a name="ei-TipsDB"></a>

### TipsDB



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tips | [InGameMail](#ei-InGameMail) | repeated |  |






<a name="ei-UpdateCoopPermissionsRequest"></a>

### UpdateCoopPermissionsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| contract_identifier | [string](#string) | optional |  |
| coop_identifier | [string](#string) | optional |  |
| requesting_user_id | [string](#string) | optional |  |
| public | [bool](#bool) | optional |  |
| client_version | [uint32](#uint32) | optional |  |






<a name="ei-UpdateCoopPermissionsResponse"></a>

### UpdateCoopPermissionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| success | [bool](#bool) | optional |  |
| message | [string](#string) | optional |  |






<a name="ei-UserDataInfoRequest"></a>

### UserDataInfoRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| user_id | [string](#string) | optional |  |
| device_id | [string](#string) | optional |  |
| backup_checksum | [uint64](#uint64) | optional |  |






<a name="ei-UserDataInfoResponse"></a>

### UserDataInfoResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| backup_checksum | [uint64](#uint64) | optional |  |
| backup_total_cash | [double](#double) | optional |  |
| coop_memberships | [string](#string) | repeated |  |






<a name="ei-UserSubscriptionInfo"></a>

### UserSubscriptionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subscription_level | [UserSubscriptionInfo.Level](#ei-UserSubscriptionInfo-Level) | optional |  |
| next_subscription_level | [UserSubscriptionInfo.Level](#ei-UserSubscriptionInfo-Level) | optional |  |
| lock_next_subscription_level | [bool](#bool) | optional |  |
| platform | [Platform](#ei-Platform) | optional |  |
| original_transaction_id | [string](#string) | optional |  |
| linked_transaction_id | [string](#string) | optional |  |
| acknowledged | [bool](#bool) | optional |  |
| first_subscribed | [double](#double) | optional |  |
| period_end | [double](#double) | optional |  |
| status | [UserSubscriptionInfo.Status](#ei-UserSubscriptionInfo-Status) | optional |  |
| store_status | [string](#string) | optional |  |
| auto_renew | [bool](#bool) | optional |  |
| sandbox | [bool](#bool) | optional |  |
| last_updated | [double](#double) | optional |  |
| history | [UserSubscriptionInfo.HistoryEntry](#ei-UserSubscriptionInfo-HistoryEntry) | repeated |  |
| past_user_ids | [string](#string) | repeated |  |






<a name="ei-UserSubscriptionInfo-HistoryEntry"></a>

### UserSubscriptionInfo.HistoryEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [double](#double) | optional |  |
| message_id | [string](#string) | optional |  |
| message | [string](#string) | optional |  |






<a name="ei-UserVerificationAnalysis"></a>

### UserVerificationAnalysis



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| overall_status | [UserVerificationAnalysis.Status](#ei-UserVerificationAnalysis-Status) | optional |  |
| start_time | [double](#double) | optional |  |
| completion_time | [double](#double) | optional |  |
| num_prestiges | [double](#double) | optional |  |
| soul_eggs | [double](#double) | optional |  |
| eggs_of_prophecy | [uint32](#uint32) | optional |  |
| iap_status | [UserVerificationAnalysis.Status](#ei-UserVerificationAnalysis-Status) | optional |  |
| verified_pro_permit | [bool](#bool) | optional |  |
| verified_piggy_breaks | [uint32](#uint32) | optional |  |
| verified_other_iap | [uint32](#uint32) | optional |  |
| unverified_iap | [uint32](#uint32) | optional |  |
| gold_earned | [double](#double) | optional |  |
| regular_iap_buyer | [bool](#bool) | optional |  |
| regular_iap_cheater | [bool](#bool) | optional |  |
| artifacts_status | [UserVerificationAnalysis.Status](#ei-UserVerificationAnalysis-Status) | optional |  |
| missions_completed | [uint32](#uint32) | optional |  |
| artifacts_collected | [double](#double) | optional |  |
| artifacts_consumed | [double](#double) | optional |  |
| artifacts_in_inventory | [double](#double) | optional |  |
| rare_artifacts_in_inventory | [uint64](#uint64) | optional |  |
| rare_artifacts_on_server | [uint64](#uint64) | optional |  |
| legendary_artifacts_in_inventory | [uint64](#uint64) | optional |  |
| legendary_artifacts_on_server | [uint64](#uint64) | optional |  |
| gold_spent_crafting | [double](#double) | optional |  |
| excessive_consumes | [bool](#bool) | optional |  |
| excessive_inventory | [bool](#bool) | optional |  |
| excessive_spend | [bool](#bool) | optional |  |
| contracts_status | [UserVerificationAnalysis.Status](#ei-UserVerificationAnalysis-Status) | optional |  |
| num_coop_memberships | [uint32](#uint32) | optional |  |
| valid_contracts | [uint32](#uint32) | optional |  |
| invalid_contracts | [string](#string) | repeated |  |
| excessive_eop | [bool](#bool) | optional |  |
| excessive_invalid_contracts | [bool](#bool) | optional |  |
| verified | [bool](#bool) | optional |  |
| verification_override | [bool](#bool) | optional |  |
| verification_override_value | [bool](#bool) | optional |  |






<a name="ei-Vector3"></a>

### Vector3



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) | optional |  |
| y | [float](#float) | optional |  |
| z | [float](#float) | optional |  |






<a name="ei-Vector4"></a>

### Vector4



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) | optional |  |
| y | [float](#float) | optional |  |
| z | [float](#float) | optional |  |
| w | [float](#float) | optional |  |






<a name="ei-VerifyPurchaseRequest"></a>

### VerifyPurchaseRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rinfo | [BasicRequestInfo](#ei-BasicRequestInfo) | optional |  |
| sku | [string](#string) | optional |  |
| transaction_id | [string](#string) | optional |  |
| original_transaction_id | [string](#string) | optional |  |
| receipt | [string](#string) | optional |  |
| platform | [string](#string) | optional |  |
| sandbox | [bool](#bool) | optional |  |
| log | [GenericAction](#ei-GenericAction) | optional |  |






<a name="ei-VerifyPurchaseResponse"></a>

### VerifyPurchaseResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| verified | [bool](#bool) | optional |  |
| message | [string](#string) | optional |  |





 


<a name="ei-AdNetwork"></a>

### AdNetwork


| Name | Number | Description |
| ---- | ------ | ----------- |
| VUNGLE | 0 |  |
| CHARTBOOST | 1 |  |
| AD_COLONY | 2 |  |
| HYPER_MX | 3 |  |
| UNITY | 4 |  |
| FACEBOOK | 5 |  |
| APPLOVIN | 6 |  |



<a name="ei-ArtifactSpec-Level"></a>

### ArtifactSpec.Level


| Name | Number | Description |
| ---- | ------ | ----------- |
| INFERIOR | 0 |  |
| LESSER | 1 |  |
| NORMAL | 2 |  |
| GREATER | 3 |  |
| SUPERIOR | 4 |  |



<a name="ei-ArtifactSpec-Name"></a>

### ArtifactSpec.Name


| Name | Number | Description |
| ---- | ------ | ----------- |
| LUNAR_TOTEM | 0 |  |
| NEODYMIUM_MEDALLION | 3 |  |
| BEAK_OF_MIDAS | 4 |  |
| LIGHT_OF_EGGENDIL | 5 |  |
| DEMETERS_NECKLACE | 6 |  |
| VIAL_MARTIAN_DUST | 7 |  |
| ORNATE_GUSSET | 8 |  |
| THE_CHALICE | 9 |  |
| BOOK_OF_BASAN | 10 |  |
| PHOENIX_FEATHER | 11 |  |
| TUNGSTEN_ANKH | 12 |  |
| AURELIAN_BROOCH | 21 |  |
| CARVED_RAINSTICK | 22 |  |
| PUZZLE_CUBE | 23 |  |
| QUANTUM_METRONOME | 24 |  |
| SHIP_IN_A_BOTTLE | 25 |  |
| TACHYON_DEFLECTOR | 26 |  |
| INTERSTELLAR_COMPASS | 27 |  |
| DILITHIUM_MONOCLE | 28 |  |
| TITANIUM_ACTUATOR | 29 |  |
| MERCURYS_LENS | 30 |  |
| TACHYON_STONE | 1 |  |
| DILITHIUM_STONE | 31 |  |
| SHELL_STONE | 32 |  |
| LUNAR_STONE | 33 |  |
| SOUL_STONE | 34 |  |
| PROPHECY_STONE | 39 |  |
| QUANTUM_STONE | 36 |  |
| TERRA_STONE | 37 |  |
| LIFE_STONE | 38 |  |
| CLARITY_STONE | 40 |  |
| EXTRATERRESTRIAL_ALUMINUM | 13 |  |
| ANCIENT_TUNGSTEN | 14 |  |
| SPACE_ROCKS | 15 |  |
| ALIEN_WOOD | 16 |  |
| GOLD_METEORITE | 17 |  |
| TAU_CETI_GEODE | 18 |  |
| CENTAURIAN_STEEL | 19 |  |
| ERIDANI_FEATHER | 20 |  |
| DRONE_PARTS | 35 |  |
| CELESTIAL_BRONZE | 41 |  |
| LALANDE_HIDE | 42 |  |
| SOLAR_TITANIUM | 43 |  |
| TACHYON_STONE_FRAGMENT | 2 |  |
| DILITHIUM_STONE_FRAGMENT | 44 |  |
| SHELL_STONE_FRAGMENT | 45 |  |
| LUNAR_STONE_FRAGMENT | 46 |  |
| SOUL_STONE_FRAGMENT | 47 |  |
| PROPHECY_STONE_FRAGMENT | 48 |  |
| QUANTUM_STONE_FRAGMENT | 49 |  |
| TERRA_STONE_FRAGMENT | 50 |  |
| LIFE_STONE_FRAGMENT | 51 |  |
| CLARITY_STONE_FRAGMENT | 52 |  |
| UNKNOWN | 10000 |  |



<a name="ei-ArtifactSpec-Rarity"></a>

### ArtifactSpec.Rarity


| Name | Number | Description |
| ---- | ------ | ----------- |
| COMMON | 0 |  |
| RARE | 1 |  |
| EPIC | 2 |  |
| LEGENDARY | 3 |  |



<a name="ei-ArtifactSpec-Type"></a>

### ArtifactSpec.Type


| Name | Number | Description |
| ---- | ------ | ----------- |
| ARTIFACT | 0 |  |
| STONE | 1 |  |
| INGREDIENT | 2 |  |
| STONE_INGREDIENT | 3 |  |



<a name="ei-Contract-PlayerGrade"></a>

### Contract.PlayerGrade


| Name | Number | Description |
| ---- | ------ | ----------- |
| GRADE_UNSET | 0 |  |
| GRADE_C | 1 |  |
| GRADE_B | 2 |  |
| GRADE_A | 3 |  |
| GRADE_AA | 4 |  |
| GRADE_AAA | 5 |  |



<a name="ei-ContractCoopStatusResponse-MemberStatus"></a>

### ContractCoopStatusResponse.MemberStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| VALID | 0 |  |
| KICKED_INACTIVE | 1 |  |
| KICKED_PRIVATE | 2 |  |
| KICKED_CHEATS | 3 |  |
| KICKED_LEECH | 4 |  |



<a name="ei-ContractCoopStatusResponse-ResponseStatus"></a>

### ContractCoopStatusResponse.ResponseStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_ERROR | 0 |  |
| MISSING_USER | 1 |  |
| MISSING_COOP_ID | 2 |  |
| MISSING_CONTRACT_ID | 3 |  |
| MEMBERSHIP_NOT_FOUND | 4 |  |
| COOP_NOT_FOUND | 5 |  |
| CONTRACT_NOT_FOUND | 6 |  |
| INVALID_MEMBERSHIP | 7 |  |
| NO_HTTP_RESPONSE | 500 |  |



<a name="ei-ContractCoopStatusResponse-Status"></a>

### ContractCoopStatusResponse.Status


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| LOBBY | 1 |  |
| ACTIVE | 2 |  |
| COMPLETE | 3 |  |
| FINALIZED | 4 |  |



<a name="ei-ContractEvaluation-PoorBehavior"></a>

### ContractEvaluation.PoorBehavior


| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 |  |
| LOW_CONTRIBUTION | 1 |  |
| BAD_CONTRIBUTION | 2 |  |
| DISHONORABLY_DISCHARGED | 3 |  |
| POOR_TEAMWORK | 4 |  |
| ABANDONED_COOP | 5 |  |
| TIME_CHEAT | 6 |  |



<a name="ei-ContractEvaluation-Status"></a>

### ContractEvaluation.Status


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| PENDING | 1 |  |
| EVALUATING | 2 |  |
| COMPLETE | 3 |  |



<a name="ei-ContractPlayerInfo-Status"></a>

### ContractPlayerInfo.Status


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| CALCULATING | 1 |  |
| OUT_OF_DATE | 2 |  |
| INCOMPLETE | 4 |  |
| COMPLETE | 3 |  |



<a name="ei-DeviceFormFactor"></a>

### DeviceFormFactor


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_DEVICE | 0 |  |
| PHONE | 1 |  |
| TABLET | 2 |  |



<a name="ei-Egg"></a>

### Egg


| Name | Number | Description |
| ---- | ------ | ----------- |
| EDIBLE | 1 |  |
| SUPERFOOD | 2 |  |
| MEDICAL | 3 |  |
| ROCKET_FUEL | 4 |  |
| SUPER_MATERIAL | 5 |  |
| FUSION | 6 |  |
| QUANTUM | 7 |  |
| IMMORTALITY | 8 |  |
| TACHYON | 9 |  |
| GRAVITON | 10 |  |
| DILITHIUM | 11 |  |
| PRODIGY | 12 |  |
| TERRAFORM | 13 |  |
| ANTIMATTER | 14 |  |
| DARK_MATTER | 15 |  |
| AI | 16 |  |
| NEBULA | 17 |  |
| UNIVERSE | 18 |  |
| ENLIGHTENMENT | 19 |  |
| CHOCOLATE | 100 |  |
| EASTER | 101 |  |
| WATERBALLOON | 102 |  |
| FIREWORK | 103 |  |
| PUMPKIN | 104 |  |
| UNKNOWN | 1000 |  |



<a name="ei-EggIncFirstContactResponse-ErrorCodes"></a>

### EggIncFirstContactResponse.ErrorCodes


| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_ERROR | 0 |  |
| EXISTING_USER_W_GAMER_ID | 1 |  |
| USER_NOT_FOUND | 2 |  |
| BACKUP_CONFLICT | 3 |  |



<a name="ei-FarmType"></a>

### FarmType


| Name | Number | Description |
| ---- | ------ | ----------- |
| EMPTY | 1 |  |
| HOME | 2 |  |
| CONTRACT | 3 |  |



<a name="ei-GameModifier-GameDimension"></a>

### GameModifier.GameDimension


| Name | Number | Description |
| ---- | ------ | ----------- |
| EARNINGS | 1 |  |
| AWAY_EARNINGS | 2 |  |
| INTERNAL_HATCHERY_RATE | 3 |  |
| EGG_LAYING_RATE | 4 |  |
| SHIPPING_CAPACITY | 5 |  |
| HAB_CAPACITY | 6 |  |
| VEHICLE_COST | 7 |  |
| HAB_COST | 8 |  |
| RESEARCH_COST | 9 |  |



<a name="ei-GoalType"></a>

### GoalType


| Name | Number | Description |
| ---- | ------ | ----------- |
| EGGS_LAID | 1 |  |
| UNKNOWN_GOAL | 100 |  |



<a name="ei-KickPlayerCoopRequest-Reason"></a>

### KickPlayerCoopRequest.Reason


| Name | Number | Description |
| ---- | ------ | ----------- |
| INVALID | 0 |  |
| CHEATER | 1 |  |
| IDLE | 2 |  |
| LEECH | 3 |  |
| PRIVATE | 4 |  |



<a name="ei-LeaderboardScope"></a>

### LeaderboardScope


| Name | Number | Description |
| ---- | ------ | ----------- |
| ALL_TIME | 0 |  |
| CURRENT_SEASON | 1 |  |



<a name="ei-MissionInfo-DurationType"></a>

### MissionInfo.DurationType


| Name | Number | Description |
| ---- | ------ | ----------- |
| SHORT | 0 |  |
| LONG | 1 |  |
| EPIC | 2 |  |
| TUTORIAL | 3 |  |



<a name="ei-MissionInfo-Spaceship"></a>

### MissionInfo.Spaceship


| Name | Number | Description |
| ---- | ------ | ----------- |
| CHICKEN_ONE | 0 |  |
| CHICKEN_NINE | 1 |  |
| CHICKEN_HEAVY | 2 |  |
| BCR | 3 |  |
| MILLENIUM_CHICKEN | 4 |  |
| CORELLIHEN_CORVETTE | 5 |  |
| GALEGGTICA | 6 |  |
| CHICKFIANT | 7 |  |
| VOYEGGER | 8 |  |
| HENERPRISE | 9 |  |



<a name="ei-MissionInfo-Status"></a>

### MissionInfo.Status


| Name | Number | Description |
| ---- | ------ | ----------- |
| FUELING | 0 |  |
| PREPARE_TO_LAUNCH | 5 |  |
| EXPLORING | 10 |  |
| RETURNED | 15 |  |
| ANALYZING | 16 |  |
| COMPLETE | 20 |  |
| ARCHIVED | 25 |  |



<a name="ei-Platform"></a>

### Platform


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN_PLATFORM | 0 |  |
| IOS | 1 |  |
| DROID | 2 |  |



<a name="ei-ReportPlayerCoopRequest-Reason"></a>

### ReportPlayerCoopRequest.Reason


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| OFFENSIVE_NAME | 1 |  |
| CHEATING | 2 |  |
| LEECHING | 3 |  |



<a name="ei-RewardType"></a>

### RewardType


| Name | Number | Description |
| ---- | ------ | ----------- |
| CASH | 1 |  |
| GOLD | 2 |  |
| SOUL_EGGS | 3 |  |
| EGGS_OF_PROPHECY | 4 |  |
| EPIC_RESEARCH_ITEM | 5 |  |
| PIGGY_FILL | 6 |  |
| PIGGY_MULTIPLIER | 7 |  |
| PIGGY_LEVEL_BUMP | 8 |  |
| BOOST | 9 |  |
| BOOST_TOKEN | 10 |  |
| ARTIFACT | 11 |  |
| ARTIFACT_CASE | 12 |  |
| CHICKEN | 13 |  |
| SHELL_SCRIPT | 14 |  |
| UNKNOWN_REWARD | 100 |  |



<a name="ei-SaveBackupResponse-ErrorCodes"></a>

### SaveBackupResponse.ErrorCodes


| Name | Number | Description |
| ---- | ------ | ----------- |
| NO_ERROR | 0 |  |
| USER_NOT_FOUND | 1 |  |
| COULD_NOT_OVERWRITE | 2 |  |
| BACKUP_OFFERED | 3 |  |
| BAD_USER_ID | 4 |  |



<a name="ei-ShellDB-FarmElement"></a>

### ShellDB.FarmElement


| Name | Number | Description |
| ---- | ------ | ----------- |
| HEN_HOUSE | 1 |  |
| SILO | 2 |  |
| MAILBOX | 3 |  |
| TROPHY_CASE | 4 |  |
| GROUND | 5 |  |
| HARDSCAPE | 6 |  |
| HYPERLOOP | 7 |  |
| DEPOT | 8 |  |
| LAB | 9 |  |
| HATCHERY | 10 |  |
| HOA | 11 |  |
| MISSION_CONTROL | 12 |  |
| FUEL_TANK | 13 |  |
| CHICKEN | 14 |  |
| HAT | 15 |  |
| UNKNOWN | 99 |  |



<a name="ei-ShellObjectSpec-ChickenAnimation"></a>

### ShellObjectSpec.ChickenAnimation


| Name | Number | Description |
| ---- | ------ | ----------- |
| STANDARD_RUN | 0 |  |
| SLOWMO | 7 |  |
| WOBBLE | 1 |  |
| WOBBLE_LEAN | 5 |  |
| SMOOTH | 2 |  |
| SMOOTH_LEAN | 6 |  |
| HOVER | 3 |  |
| SIDEWAYS_SMOOTH | 4 |  |
| SIDEWAYS_LEAN | 8 |  |



<a name="ei-ShellShowcaseListingInfo-Status"></a>

### ShellShowcaseListingInfo.Status


| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 |  |
| SUBMITTED | 1 |  |
| LIVE | 2 |  |
| FEATURED | 3 |  |
| INVALID | 4 |  |



<a name="ei-ShellSpec-AssetType"></a>

### ShellSpec.AssetType


| Name | Number | Description |
| ---- | ------ | ----------- |
| COOP | 1 |  |
| SHACK | 2 |  |
| SUPER_SHACK | 3 |  |
| SHORT_HOUSE | 4 |  |
| THE_STANDARD | 5 |  |
| LONG_HOUSE | 6 |  |
| DOUBLE_DECKER | 7 |  |
| WAREHOUSE | 8 |  |
| CENTER | 9 |  |
| BUNKER | 10 |  |
| EGGKEA | 11 |  |
| HAB_1K | 12 |  |
| HANGAR | 13 |  |
| TOWER | 14 |  |
| HAB_10K | 15 |  |
| EGGTOPIA | 16 |  |
| MONOLITH | 17 |  |
| PLANET_PORTAL | 18 |  |
| CHICKEN_UNIVERSE | 19 |  |
| SILO_0_SMALL | 50 |  |
| SILO_0_MED | 51 |  |
| SILO_0_LARGE | 52 |  |
| SILO_1_SMALL | 53 |  |
| SILO_1_MED | 54 |  |
| SILO_1_LARGE | 55 |  |
| SILO_ALL | 59 |  |
| MAILBOX | 70 |  |
| TROPHY_CASE | 71 |  |
| GROUND | 72 |  |
| HARDSCAPE | 73 |  |
| HYPERLOOP | 74 |  |
| DEPOT_1 | 100 |  |
| DEPOT_2 | 101 |  |
| DEPOT_3 | 102 |  |
| DEPOT_4 | 103 |  |
| DEPOT_5 | 104 |  |
| DEPOT_6 | 105 |  |
| DEPOT_7 | 106 |  |
| LAB_1 | 110 |  |
| LAB_2 | 111 |  |
| LAB_3 | 112 |  |
| LAB_4 | 113 |  |
| LAB_5 | 114 |  |
| LAB_6 | 115 |  |
| HATCHERY_EDIBLE | 120 |  |
| HATCHERY_SUPERFOOD | 121 |  |
| HATCHERY_MEDICAL | 122 |  |
| HATCHERY_ROCKET_FUEL | 123 |  |
| HATCHERY_SUPERMATERIAL | 124 |  |
| HATCHERY_FUSION | 125 |  |
| HATCHERY_QUANTUM | 126 |  |
| HATCHERY_IMMORTALITY | 127 |  |
| HATCHERY_TACHYON | 128 |  |
| HATCHERY_GRAVITON | 129 |  |
| HATCHERY_DILITHIUM | 130 |  |
| HATCHERY_PRODIGY | 131 |  |
| HATCHERY_TERRAFORM | 132 |  |
| HATCHERY_ANTIMATTER | 133 |  |
| HATCHERY_DARK_MATTER | 134 |  |
| HATCHERY_AI | 135 |  |
| HATCHERY_NEBULA | 136 |  |
| HATCHERY_UNIVERSE | 137 |  |
| HATCHERY_ENLIGHTENMENT | 138 |  |
| HATCHERY_CHOCOLATE | 139 |  |
| HATCHERY_EASTER | 140 |  |
| HATCHERY_WATERBALLOON | 141 |  |
| HATCHERY_FIREWORK | 142 |  |
| HATCHERY_PUMPKIN | 143 |  |
| HOA_1 | 170 |  |
| HOA_2 | 171 |  |
| HOA_3 | 172 |  |
| MISSION_CONTROL_1 | 180 |  |
| MISSION_CONTROL_2 | 181 |  |
| MISSION_CONTROL_3 | 182 |  |
| FUEL_TANK_1 | 200 |  |
| FUEL_TANK_2 | 201 |  |
| FUEL_TANK_3 | 202 |  |
| FUEL_TANK_4 | 203 |  |
| HATCHERY_GRAVITON_TOP | 500 |  |
| HATCHERY_NEBULA_MIDDLE | 501 |  |
| HATCHERY_NEBULA_TOP | 502 |  |
| HATCHERY_DARK_MATTER_RING_1 | 505 |  |
| HATCHERY_DARK_MATTER_RING_2 | 506 |  |
| HATCHERY_DARK_MATTER_RING_3 | 507 |  |
| HATCHERY_AI_TOP_1 | 510 |  |
| HATCHERY_AI_TOP_2 | 511 |  |
| HATCHERY_AI_TOP_3 | 512 |  |
| HATCHERY_AI_TOP_4 | 513 |  |
| HATCHERY_UNIVERSE_PROBE | 515 |  |
| HATCHERY_UNIVERSE_BOLT | 516 |  |
| HATCHERY_ENLIGHTENMENT_ORB | 520 |  |
| HYPERLOOP_TRACK | 570 |  |
| MAILBOX_FULL | 600 |  |
| CHICKEN | 1000 |  |
| HAT | 1010 |  |
| UNKNOWN | 9999 |  |



<a name="ei-UILocation"></a>

### UILocation


| Name | Number | Description |
| ---- | ------ | ----------- |
| NONE | 0 |  |
| SHOP | 1 |  |
| BOOST_SHOP | 2 |  |
| PIGGY | 3 |  |
| PRO_PERMIT | 4 |  |
| ULTRA_SHOP | 10 |  |
| SHELLS | 5 |  |
| SHELL_SETS | 6 |  |
| SHELLS_SHOWCASE | 12 |  |
| CHICKENS | 7 |  |
| CHICKEN_HATS | 11 |  |
| EPIC_RESEARCH | 8 |  |
| SETTINGS | 9 |  |



<a name="ei-UserSubscriptionInfo-Level"></a>

### UserSubscriptionInfo.Level


| Name | Number | Description |
| ---- | ------ | ----------- |
| STANDARD | 0 |  |
| PRO | 1 |  |



<a name="ei-UserSubscriptionInfo-Status"></a>

### UserSubscriptionInfo.Status


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| ACTIVE | 1 |  |
| EXPIRED | 2 |  |
| REVOKED | 3 |  |
| GRACE_PERIOD | 4 |  |
| PAUSE_HOLD | 5 |  |



<a name="ei-UserType"></a>

### UserType


| Name | Number | Description |
| ---- | ------ | ----------- |
| ALL_USERS | 0 |  |
| EGGED_UP | 15 |  |
| CONTRACTS_UNLOCKED | 1 |  |
| ARTIFACTS_UNLOCKED | 3 |  |
| FUEL_TANK_UNLOCKED | 4 |  |
| PRO_PERMIT_ACTIVE | 5 |  |
| ULTRA_ACTIVE | 6 |  |
| NO_PRO_PERMIT | 7 |  |
| NO_ULTRA | 8 |  |
| CONTRACTS_INACTIVE | 9 |  |
| CONTRACTS_ACTIVE | 10 |  |
| PLAYING_CONTRACT | 11 |  |
| ARTIFACTS_INACTIVE | 12 |  |
| ARTIFACTS_ACTIVE | 13 |  |
| PRESTIGE_READY | 14 |  |
| PIGGY_HESITANT | 16 |  |



<a name="ei-UserVerificationAnalysis-Status"></a>

### UserVerificationAnalysis.Status


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| PROCESSING | 1 |  |
| COMPLETE | 2 |  |


 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

