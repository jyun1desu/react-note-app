export const loadState = () => {
    try {
        const existedNotes = localStorage.getItem('notes');
        return JSON.parse(existedNotes) || [];
    } catch (err) {
        return [];
    }
};

export const saveNotes = (state) => {
    const newToSave = JSON.stringify(state);
    localStorage.setItem('notes', newToSave);
};