
export interface IStorageService {
    save(key: string, value: string): void;
    load(key: string): string | null;
    remove(key: string): void;
}

export class LocalStorageService implements IStorageService {

    save(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    load(key: string) {
        const item = localStorage.getItem(key);

        if (item) {
            return JSON.parse(item);
        }

        return null;
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}
