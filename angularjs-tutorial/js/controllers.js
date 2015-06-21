vendas.controller("vendasCtrl", function ($scope) {

    $scope.vendas = [];
    $scope.statusVenda = ["Nova", "Em Andamento", "Finalizada"];
    $scope.vendedores = ["Cassiano", "Gleidson", "Wendell", "Carlos", "Abimael", "Jackson"];

    $scope.vender = function (venda) {
        $scope.vendas.push(angular.copy(venda));
        delete $scope.venda;
    };

    $scope.isVendaCompleta = function (venda) {
        return venda !== undefined
            && venda.data !== null && venda.data !== ''
            && venda.status !== null && venda.status !== ''
            && venda.valor !== null && venda.valor !== ''
            && venda.vendedor != null  && venda.vendedor != '';
    }
});