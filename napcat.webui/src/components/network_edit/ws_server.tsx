import GenericForm from './generic_form'
import type { Field } from './generic_form'

export interface WebsocketServerFormProps {
  data?: OneBotConfig['network']['websocketServers'][0]
  onClose: () => void
  onSubmit: (
    data: OneBotConfig['network']['websocketServers'][0]
  ) => Promise<void>
}

type WebsocketServerFormType = OneBotConfig['network']['websocketServers']

const WebsocketServerForm: React.FC<WebsocketServerFormProps> = ({
  data,
  onClose,
  onSubmit
}) => {
  const defaultValues: WebsocketServerFormType[0] = {
    enable: false,
    name: '',
    host: '0.0.0.0',
    port: 3001,
    reportSelfMessage: false,
    enableForcePushEvent: true,
    messagePostFormat: 'array',
    token: '',
    debug: false,
    heartInterval: 30000
  }

  const fields: Field<'websocketServers'>[] = [
    {
      name: 'enable',
      label: '启用',
      type: 'switch',
      description: '保存后启用此配置',
      colSpan: 1
    },
    {
      name: 'debug',
      label: '开启Debug',
      type: 'switch',
      description: '是否开启调试模式',
      colSpan: 1
    },
    {
      name: 'name',
      label: '名称',
      type: 'input',
      placeholder: '请输入名称',
      isRequired: true,
      isDisabled: !!data
    },
    {
      name: 'host',
      label: 'Host',
      type: 'input',
      placeholder: '请输入主机地址',
      isRequired: true
    },
    {
      name: 'port',
      label: 'Port',
      type: 'input',
      placeholder: '请输入端口',
      isRequired: true,
      colSpan: 1
    },
    {
      name: 'messagePostFormat',
      label: '消息格式',
      type: 'select',
      placeholder: '请选择消息格式',
      isRequired: true,
      options: [
        { key: 'array', value: 'Array' },
        { key: 'string', value: 'String' }
      ],
      colSpan: 1
    },
    {
      name: 'reportSelfMessage',
      label: '上报自身消息',
      type: 'switch',
      description: '是否上报自身消息',
      colSpan: 1
    },
    {
      name: 'enableForcePushEvent',
      label: '强制推送事件',
      type: 'switch',
      description: '是否强制推送事件',
      colSpan: 1
    },
    {
      name: 'token',
      label: 'Token',
      type: 'input',
      placeholder: '请输入Token'
    },
    {
      name: 'heartInterval',
      label: '心跳间隔',
      type: 'input',
      placeholder: '请输入心跳间隔',
      isRequired: true
    }
  ]

  return (
    <GenericForm
      data={data}
      defaultValues={defaultValues}
      onClose={onClose}
      onSubmit={onSubmit}
      fields={fields}
    />
  )
}

export default WebsocketServerForm
