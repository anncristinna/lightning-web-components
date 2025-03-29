public with sharing class ComponentePaiController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return new List<Account>([SELECT Id, Name FROM Account LIMIT 2]);
    }

    @AuraEnabled(cacheable=true)
    public static List<Dados> getDadosEmpresa() {
        List<Dados> lstDados = new List<Dados>();
        for(Integer i = 0; i <=2; i++) {
            Dados dado = new Dados();
            dado.id = String.valueOf(i);
            dado.empresa = 'Empresa ' + String.valueOf(i);
            dado.produtos = new List<Produtos>();
            dado.distribuidoras = new List<Distribuidoras>();
            dado.lojas = new List<Lojas>();

            for(Integer j = 0; j < 2; j++) {
                Produtos produto = new Produtos();
                produto.id = String.valueOf(j);
                produto.nome = 'Produto' + String.valueOf(j);
                dado.produtos.add(produto);
            }

            for(Integer j = 0; j < 2; j++) {
                Distribuidoras distribuidora = new Distribuidoras();
                distribuidora.id = String.valueOf(j);
                distribuidora.nome = 'Distribuidora' + String.valueOf(j);
                dado.distribuidoras.add(distribuidora);
            }

            for(Integer j = 0; j < 2; j++) {
                Lojas loja = new Lojas();
                loja.id = String.valueOf(j);
                loja.nome = 'Loja' + String.valueOf(j);
                dado.lojas.add(loja);
            }

            lstDados.add(dado);
        }
        return lstDados;
    }

    public class Dados {
        @AuraEnabled public String id;
        @AuraEnabled public String empresa;
        @AuraEnabled public List<Produtos> produtos;
        @AuraEnabled public List<Distribuidoras> distribuidoras;
        @AuraEnabled public List<Lojas> lojas;
    }

    public class Produtos {
        @AuraEnabled public String id;
        @AuraEnabled public String nome;
    }

    public class Distribuidoras {
        @AuraEnabled public String id;
        @AuraEnabled public String nome;
    }

    public class Lojas {
        @AuraEnabled public String id;
        @AuraEnabled public String nome;
    }
}