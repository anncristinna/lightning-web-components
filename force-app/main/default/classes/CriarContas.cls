public with sharing class CriarContas {

    @AuraEnabled
    public static void criarConta(Map <String, Object> conta) {
        Account acc = new Account();
        acc.Name = (String) conta.get('name');
        acc.Phone = (String) conta.get('phone');
        acc.NumberOfEmployees = Integer.valueOf(conta.get('numberOfEmployees'));
        insert acc;
    }
} 