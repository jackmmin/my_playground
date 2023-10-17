public with sharing class UpbitFuncController {
    @AuraEnabled(cacheable=true)
    public static Map<String, Object> init() {
        Map<String, Object> result = new Map<String, Object>();
        // 업비트 API 호출 및 데이터 가져오는 로직
        // 여기에서 업비트 API를 호출하고 데이터를 가공한 후 List<Object>로 반환합니다.
        return result; // data는 업비트 API에서 가져온 데이터
    }
}