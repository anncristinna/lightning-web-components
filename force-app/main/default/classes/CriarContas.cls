public with sharing class CriarContas {

    @AuraEnabled
    public static void criarConta(String nome) {
        Account acc = new Account();
        acc.Name = nome;
        insert acc;
    }
} 