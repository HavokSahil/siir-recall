export function collectionSlug(subject:string){return subject.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
export function exportPath(name:string,extension:string){return `${import.meta.env.BASE_URL}exports/${name}.${extension}`}
