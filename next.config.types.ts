import { NextConfig } from 'next'

export type CustomNextConfig = NextConfig & {
  // 在这里添加自定义配置类型
}

export function defineNextConfig(config: CustomNextConfig): CustomNextConfig {
  return config
}
