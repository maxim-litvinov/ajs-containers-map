const ErrorRepository = require('../app');

describe('ErrorRepository', () => {
    let errorRepository;

    beforeEach(() => {
        errorRepository = new ErrorRepository();
    });

    test('следует добавить и перевести ошибки', () => {
        errorRepository.addError(404, 'Not found');
        errorRepository.addError(500, 'Internal server error');

        expect(errorRepository.translate(404)).toBe('Not found');
        expect(errorRepository.translate(500)).toBe('Internal server error');
    });

    test('должен возвращать "Unknown error" для неизвестной ошибки', () => {
        expect(errorRepository.translate(999)).toBe('Unknown error');
    });
});