angular.module('rw')
    .filter('maiusculo', maiusculo);

function maiusculo() {
    return function (value) {
        if (value && typeof value === 'string') {
            return value.toUpperCase();
        }

        return value;
    }
}