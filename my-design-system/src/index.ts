import '@fontsource/noto-sans/400.css'
import '@fontsource/noto-sans/500.css'
import '@fontsource/noto-sans/700.css'

import './styles/global.scss'

export { Button } from './components/Button'
export type { ButtonProps, ButtonState, ButtonVariant } from './components/Button'

export { Carousel, CarouselSlide } from './components/Carousel'
export type {
  CarouselProps,
  CarouselSlideProps,
  CarouselTheme,
} from './components/Carousel'

export { SocialMediaPost } from './components/SocialMediaPost'
export type {
  SocialMediaPostPagination,
  SocialMediaPostPlatform,
  SocialMediaPostProps,
  SocialMediaPostTheme,
  SocialMediaPostType,
} from './components/SocialMediaPost'

export { List, ListItem } from './components/List'
export type {
  ListItemProps,
  ListItemVariant,
  ListProps,
  ListTheme,
} from './components/List'

export {
  Search,
  SearchTabs,
  SearchTab,
  SearchResults,
} from './components/Search'
export type {
  SearchProps,
  SearchSize,
  SearchTheme,
  SearchTabsProps,
  SearchTabProps,
  SearchResultsProps,
} from './components/Search'

export {
  Card,
  CardBody,
  CardHeader,
  CardIcon,
  CardTitle,
  CardSubtitle,
  CardText,
  CardMedia,
  CardLogo,
  CardStat,
  CardRating,
  CardPerson,
  CardAlert,
  CardLabels,
  CardLabel,
  CardActions,
  CardLink,
} from './components/Card'
export type {
  CardActionsProps,
  CardAlertProps,
  CardHeaderProps,
  CardLinkProps,
  CardLogoProps,
  CardMediaProps,
  CardMediaShape,
  CardOrientation,
  CardPersonProps,
  CardProps,
  CardRatingProps,
  CardStatProps,
  CardTheme,
} from './components/Card'

export {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogText,
  DialogActions,
} from './components/Dialog'
export type {
  DialogActionsProps,
  DialogHeaderProps,
  DialogPlacement,
  DialogProps,
  DialogSize,
  DialogTheme,
} from './components/Dialog'
