import { playlist } from "@/app/libs/playlists";
export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
    return Response.json(playlist)
}