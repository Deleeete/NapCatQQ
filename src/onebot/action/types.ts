export type BaseCheckResult = ValidCheckResult | InvalidCheckResult;

export interface ValidCheckResult {
    valid: true;

    [k: string | number]: any;
}

export interface InvalidCheckResult {
    valid: false;
    message: string;

    [k: string | number]: any;
}

export enum ActionName {
    // onebot 11
    SendPrivateMsg = 'send_private_msg',
    SendGroupMsg = 'send_group_msg',
    SendMsg = 'send_msg',
    DeleteMsg = 'delete_msg',
    GetMsg = 'get_msg',
    GoCQHTTP_GetForwardMsg = 'get_forward_msg',
    SendLike = 'send_like',
    SetGroupKick = 'set_group_kick',
    SetGroupBan = 'set_group_ban',
    // SetGroupAnoymousBan = 'set_group_anonymous_ban',
    SetGroupWholeBan = 'set_group_whole_ban',
    SetGroupAdmin = 'set_group_admin',
    // SetGroupAnoymous = 'set_group_anonymous',
    SetGroupCard = 'set_group_card',
    SetGroupName = 'set_group_name',
    SetGroupLeave = 'set_group_leave',
    SetSpecialTittle = 'set_group_special_title',
    SetFriendAddRequest = 'set_friend_add_request',
    SetGroupAddRequest = 'set_group_add_request',
    GetLoginInfo = 'get_login_info',
    GoCQHTTP_GetStrangerInfo = 'get_stranger_info',
    GetFriendList = 'get_friend_list',
    GetGroupInfo = 'get_group_info',
    GetGroupList = 'get_group_list',
    GetGroupMemberInfo = 'get_group_member_info',
    GetGroupMemberList = 'get_group_member_list',
    GetGroupHonorInfo = 'get_group_honor_info',
    GetCookies = 'get_cookies',
    GetCSRF = 'get_csrf_token',
    GetCredentials = 'get_credentials',
    GetRecord = 'get_record',
    GetImage = 'get_image',
    CanSendImage = 'can_send_image',
    CanSendRecord = 'can_send_record',
    GetStatus = 'get_status',
    GetVersionInfo = 'get_version_info',
    // Reboot = 'set_restart',
    // CleanCache = 'clean_cache',

    // go-cqhttp
    SetQQProfile = 'set_qq_profile',
    // QidianGetAccountInfo = 'qidian_get_account_info',
    // GetModelShow = '_get_model_show',
    // SetModelShow = '_set_model_show',
    GetOnlineClient = 'get_online_clients',
    // GetUnidirectionalFriendList = 'get_unidirectional_friend_list',
    // DeleteFriend = 'delete_friend',
    // DeleteUnidirectionalFriendList = 'delete_unidirectional_friend',
    GoCQHTTP_MarkMsgAsRead = 'mark_msg_as_read',
    GoCQHTTP_SendGroupForwardMsg = 'send_group_forward_msg',
    GoCQHTTP_SendPrivateForwardMsg = 'send_private_forward_msg',
    GoCQHTTP_GetGroupMsgHistory = 'get_group_msg_history',
    OCRImage = 'ocr_image',
    IOCRImage = '.ocr_image',
    GetGroupSystemMsg = 'get_group_system_msg',
    GoCQHTTP_GetEssenceMsg = 'get_essence_msg_list',
    // GetGroupAtAllRemain = 'get_group_at_all_remain',
    SetGroupPortrait = 'set_group_portrait',
    SetEssenceMsg = 'set_essence_msg',
    DelEssenceMsg = 'delete_essence_msg',
    GoCQHTTP_SendGroupNotice = '_send_group_notice',
    GoCQHTTP_GetGroupNotice = '_get_group_notice',
    GoCQHTTP_UploadGroupFile = 'upload_group_file',
    GOCQHTTP_DeleteGroupFile = 'delete_group_file',
    GoCQHTTP_CreateGroupFileFolder = 'create_group_file_folder',
    GoCQHTTP_DeleteGroupFileFolder = 'delete_group_folder',
    GoCQHTTP_GetGroupFileSystemInfo = 'get_group_file_system_info',
    GoCQHTTP_GetGroupRootFiles = 'get_group_root_files',
    GoCQHTTP_GetGroupFilesByFolder = 'get_group_files_by_folder',
    GOCQHTTP_GetGroupFileUrl = 'get_group_file_url',
    GOCQHTTP_UploadPrivateFile = 'upload_private_file',
    // GOCQHTTP_ReloadEventFilter = 'reload_event_filter',
    GoCQHTTP_DownloadFile = 'download_file',
    // GoCQHTTP_CheckUrlSafely = 'check_url_safely',
    // GoCQHTTP_GetWordSlices = '.get_word_slices',
    GoCQHTTP_HandleQuickAction = '.handle_quick_operation',

    // 以下为扩展napcat扩展
    Unknown = 'unknown',
    SharePeer = 'ArkSharePeer',
    ShareGroupEx = 'ArkShareGroup',
    // RebootNormal = 'reboot_normal', //无快速登录重新启动
    GetRobotUinRange = 'get_robot_uin_range',
    SetOnlineStatus = 'set_online_status',
    GetFriendsWithCategory = 'get_friends_with_category',
    SetQQAvatar = 'set_qq_avatar',
    GetFile = 'get_file',
    ForwardFriendSingleMsg = 'forward_friend_single_msg',
    ForwardGroupSingleMsg = 'forward_group_single_msg',
    TranslateEnWordToZn = 'translate_en2zh',
    SetMsgEmojiLike = 'set_msg_emoji_like',
    GoCQHTTP_SendForwardMsg = 'send_forward_msg',
    MarkPrivateMsgAsRead = 'mark_private_msg_as_read',
    MarkGroupMsgAsRead = 'mark_group_msg_as_read',
    GetFriendMsgHistory = 'get_friend_msg_history',
    CreateCollection = 'create_collection',
    GetCollectionList = 'get_collection_list',
    SetLongNick = 'set_self_longnick',
    GetRecentContact = 'get_recent_contact',
    _MarkAllMsgAsRead = '_mark_all_as_read',
    GetProfileLike = 'get_profile_like',
    FetchCustomFace = 'fetch_custom_face',
    FetchEmojiLike = 'fetch_emoji_like',
    SetInputStatus = 'set_input_status',
    GetGroupInfoEx = 'get_group_info_ex',
    GetGroupIgnoreAddRequest = 'get_group_ignore_add_request',
    DelGroupNotice = '_del_group_notice',
    FetchUserProfileLike = 'fetch_user_profile_like',
    FriendPoke = 'friend_poke',
    GroupPoke = 'group_poke',
    GetPacketStatus = 'nc_get_packet_status',
    GetUserStatus = 'nc_get_user_status',
    GetRkey = 'nc_get_rkey',
    GetGroupShutList = 'get_group_shut_list',

    GetGuildList = 'get_guild_list',
    GetGuildProfile = 'get_guild_service_profile',
    // Debug = 'debug',
    // TestApi01 = 'test_api_01',
    // UploadForwardMsg = "upload_forward_msg",
}
