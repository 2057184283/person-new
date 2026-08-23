# Thought Garden｜Vercel 部署版

这是郭甜甜个人作品网站的标准 Next.js 版本，已移除 OpenAI Sites、Cloudflare Worker 和 vinext 专属配置，可由 Vercel 直接识别。

## 上传 GitHub

把本目录中的全部文件上传到同一个 GitHub 仓库。仓库首页必须能直接看到：

```text
app/
public/
package.json
pnpm-lock.yaml
next.config.ts
vercel.json
```

不要上传外层压缩包，也不要上传 `node_modules` 或 `.next`。

## Vercel 部署

1. 在 Vercel 选择 **Add New → Project**。
2. 导入该 GitHub 仓库。
3. Framework Preset 应显示 **Next.js**。
4. Root Directory 保持仓库根目录；如果源码位于仓库里的子文件夹，选择该子文件夹。
5. Build Command、Install Command 和 Output Directory 均可保持默认；仓库中的 `vercel.json` 已提供构建配置。
6. 点击 Deploy。

## 本地运行

```bash
pnpm install
pnpm dev
```

生产构建使用 `pnpm build`。

## 内容位置

- `app/page.tsx`：总首页
- `app/garden`：个人空间
- `app/profile`：个人资料
- `app/experience`：实习经历
- `app/projects`：项目案例
- `app/research`：研究内容
- `app/*.css`：页面样式
- `public/media`：图片、视频和背景音乐

## 公开前检查

网站包含手机号、邮箱、人物肖像及用户提供的背景音乐。公开部署前请确认个人信息展示意愿和音乐传播授权。
