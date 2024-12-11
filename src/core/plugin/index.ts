import { OB11Message } from "@/onebot";
import { NapCatCore } from "..";
import { ActionMap } from "@/onebot/action";

export const plugin_onmessage = async (adapter: string, core: NapCatCore, action: ActionMap, message: OB11Message) => {
    if (message.raw_message === 'ping') {
        const ret = await action.get('send_group_msg')?.handle({ group_id: message.group_id, message: 'pong' }, adapter);
        console.log(ret);
    }
}