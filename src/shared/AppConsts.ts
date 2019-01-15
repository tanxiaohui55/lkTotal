export class AppConsts {

    static readonly tenancyNamePlaceHolderInUrl = '{TENANCY_NAME}';

    static remoteServiceBaseUrl: string;
    static remoteServiceBaseUrlFormat: string;
    static appBaseUrl: string;
    static appBaseHref: string; // returns angular's base-href parameter value if used during the publish
    static appBaseUrlFormat: string;
    static recaptchaSiteKey: string;
    static subscriptionExpireNootifyDayCount: number;

    static localeMappings: any = [];

    static readonly userManagement = {
        defaultAdminUserName: 'admin'
    };

    static readonly localization = {
        defaultLocalizationSourceName: 'Demo'
    };

    static readonly authorization = {
        encrptedAuthTokenName: 'enc_auth_token'
    };

    static readonly grid = {
        defaultPageSize: 10
    };

    static readonly carrierList = [
        { code: undefined, name: 'Nothing selected' },
        { code: 'SF', name: 'SF-顺丰' },
        { code: 'SFH', name: 'SFH-顺丰航空' },
        { code: 'EMS', name: 'EMS-邮政EMS' },
        { code: 'EYB', name: 'EYB-经济快件' },
        { code: 'ZJS', name: 'ZJS-宅急送' },
        { code: 'YTO', name: 'YTO-圆通' },
        { code: 'ZTO', name: 'ZTO-中通' },
        { code: 'HTKY', name: 'HTKY-百世汇通' },
        { code: 'UC', name: 'UC-优速' },
        { code: 'STO', name: 'STO-申通' },
        { code: 'TTKDEX', name: 'TTKDEX-天天快递' },
        { code: 'QFKD', name: 'QFKD-全峰' },
        { code: 'FAST', name: 'FAST-快捷' },
        { code: 'POSTB', name: 'POSTB-邮政小包' },
        { code: 'GTO', name: 'GTO-国通' },
        { code: 'YUNDA', name: 'YUNDA-韵达' },
        { code: 'JD', name: 'JD-京东配送' },
        { code: 'DD', name: 'DD-当当宅配' },
        { code: 'AMAZON', name: 'AMAZON-亚马逊物流' },
        { code: 'OTHER', name: 'OTHER-其他' },
        { code: 'ZT', name: 'ZT-自提' },
        { code: 'WL', name: 'WL-物流' },
        { code: 'LKTO', name: 'LKTO-临空虚拟快递' },
        { code: 'ZGYZZHDD', name: 'ZGYZZHDD-JD邮政小包' },
        { code: 'SFCT', name: 'SFCT-自提转顺丰传统' },
        { code: 'LKZP', name: 'LKZP-临空直配' },
    ]

    static readonly provinces = [
        '安徽',
        '澳门',
        '北京',
        '福建',
        '甘肃',
        '广东',
        '广西',
        '贵州',
        '海南',
        '河北',
        '河南',
        '黑龙江',
        '湖北',
        '湖南',
        '吉林',
        '江苏',
        '江西',
        '辽宁',
        '内蒙古',
        '青海',
        '山东',
        '山西',
        '陕西',
        '上海',
        '四川',
        '台湾',
        '天津',
        '西藏',
        '香港',
        '新疆',
        '云南',
        '浙江',
        '重庆',
    ];
}
