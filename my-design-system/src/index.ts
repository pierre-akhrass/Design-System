import '@fontsource/noto-sans/400.css'
import '@fontsource/noto-sans/500.css'
import '@fontsource/noto-sans/700.css'

import './styles/global.scss'

export { Button } from './components/Button'
export type { ButtonProps, ButtonState, ButtonVariant } from './components/Button'

export { Avatar, AvatarGroup, AvatarBlock } from './components/Avatar'
export type { AvatarProps, AvatarType, AvatarSize, AvatarGroupProps, AvatarGroupSpacing, AvatarBlockProps } from './components/Avatar'

export { Illustration } from './components/Illustration'
export type { IllustrationProps, IllustrationName, IllustrationSize } from './components/Illustration'

export { Media, VideoPlayer, VideoGallery } from './components/Media'
export type { MediaProps, MediaRatio, VideoPlayerProps, VideoGalleryProps, VideoItem } from './components/Media'
