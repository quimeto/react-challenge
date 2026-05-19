import { useEffect, useRef } from "react";
import { IStorageService, LocalStorageService } from "../services/StorageService";


export const useStorageService = () => {
    const storageServiceRef = useRef<IStorageService | null>(null);

    useEffect(() => {
        storageServiceRef.current = new LocalStorageService();
    }, []);

    return storageServiceRef;
}