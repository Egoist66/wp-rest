/// <reference types="vite/client" />

export type RootPosts = Posts[]

export interface Posts {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  content: Content
  excerpt: Excerpt
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Meta
  categories: number[]
  tags: any[]
  yoast_head: string
  yoast_head_json: YoastHeadJson
  acf: any[]
  _links: Links
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface Excerpt {
  rendered: string
  protected: boolean
}

export interface Meta {
  _eb_attr: string
  inline_featured_image: boolean
  _kadence_starter_templates_imported_post: boolean
  _kad_post_transparent: string
  _kad_post_title: string
  _kad_post_layout: string
  _kad_post_sidebar_id: string
  _kad_post_content_style: string
  _kad_post_vertical_padding: string
  _kad_post_feature: string
  _kad_post_feature_position: string
  _kad_post_header: boolean
  _kad_post_footer: boolean
  footnotes: string
}

export interface YoastHeadJson {
  title: string
  robots: Robots
  og_locale: string
  og_type: string
  og_title: string
  og_url: string
  og_site_name: string
  article_published_time: string
  article_modified_time?: string
  author: string
  twitter_card: string
  twitter_misc: TwitterMisc
  schema: Schema
}

export interface Robots {
  index: string
  follow: string
  "max-snippet": string
  "max-image-preview": string
  "max-video-preview": string
}

export interface TwitterMisc {
  "Написано автором": string
}

export interface Schema {
  "@context": string
  "@graph": Graph[]
}

export interface Graph {
  "@type": string
  "@id": string
  isPartOf?: IsPartOf
  author?: Author
  headline?: string
  datePublished?: string
  dateModified?: string
  mainEntityOfPage?: MainEntityOfPage
  wordCount?: number
  commentCount?: number
  publisher?: Publisher
  articleSection?: string[]
  inLanguage?: string
  potentialAction?: PotentialAction[]
  url?: string
  name?: string
  breadcrumb?: Breadcrumb
  itemListElement?: ItemListElement[]
  description?: string
  logo?: Logo
  image?: Image
  sameAs?: string[]
}

export interface IsPartOf {
  "@id": string
}

export interface Author {
  name: string
  "@id": string
}

export interface MainEntityOfPage {
  "@id": string
}

export interface Publisher {
  "@id": string
}

export interface PotentialAction {
  "@type": string
  target: any
  "query-input"?: string
  name?: string
}

export interface Breadcrumb {
  "@id": string
}

export interface ItemListElement {
  "@type": string
  position: number
  name: string
  item?: string
}

export interface Logo {
  "@type": string
  inLanguage: string
  "@id": string
  url: string
  contentUrl: string
  width: number
  height: number
  caption: string
}

export interface Image {
  "@type"?: string
  inLanguage?: string
  "@id": string
  url?: string
  contentUrl?: string
  caption?: string
}

export interface Links {
  self: Self[]
  collection: Collection[]
  about: About[]
  author: Author2[]
  replies: Reply[]
  "version-history": VersionHistory[]
  "predecessor-version"?: PredecessorVersion[]
  "wp:attachment": WpAttachment[]
  "wp:term": WpTerm[]
  curies: Cury[]
}

export interface Self {
  href: string
}

export interface Collection {
  href: string
}

export interface About {
  href: string
}

export interface Author2 {
  embeddable: boolean
  href: string
}

export interface Reply {
  embeddable: boolean
  href: string
}

export interface VersionHistory {
  count: number
  href: string
}

export interface PredecessorVersion {
  id: number
  href: string
}

export interface WpAttachment {
  href: string
}

export interface WpTerm {
  taxonomy: string
  embeddable: boolean
  href: string
}

export interface Cury {
  name: string
  href: string
  templated: boolean
}

//////////////////////////////////////////////////////////////



export type MediaRoot = Data[]

export interface Data {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  author: number
  comment_status: string
  ping_status: string
  template: string
  meta: Meta
  acf: any[]
  description: Description
  caption: Caption
  alt_text: string
  media_type: string
  mime_type: string
  media_details: MediaDetails
  post: number
  source_url: string
  _links: Links
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Meta {
  _eb_attr: string
  inline_featured_image: boolean
  _kadence_starter_templates_imported_post: boolean
  _kad_post_transparent: string
  _kad_post_title: string
  _kad_post_layout: string
  _kad_post_sidebar_id: string
  _kad_post_content_style: string
  _kad_post_vertical_padding: string
  _kad_post_feature: string
  _kad_post_feature_position: string
  _kad_post_header: boolean
  _kad_post_footer: boolean
}

export interface Description {
  rendered: string
}

export interface Caption {
  rendered: string
}

export interface MediaDetails {
  width: number
  height: number
  file: string
  filesize: number
  sizes: Sizes
  image_meta: ImageMeta
}

export interface Sizes {
  medium: Medium
  thumbnail: Thumbnail
  medium_large: MediumLarge
  woocommerce_thumbnail: WoocommerceThumbnail
  woocommerce_single: WoocommerceSingle
  woocommerce_gallery_thumbnail: WoocommerceGalleryThumbnail
  "dgwt-wcas-product-suggestion": DgwtWcasProductSuggestion
  full: Full
}

export interface Medium {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface Thumbnail {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface MediumLarge {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface WoocommerceThumbnail {
  file: string
  width: number
  height: number
  filesize: number
  uncropped: boolean
  mime_type: string
  source_url: string
}

export interface WoocommerceSingle {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface WoocommerceGalleryThumbnail {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface DgwtWcasProductSuggestion {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface Full {
  file: string
  width: number
  height: number
  mime_type: string
  source_url: string
}

export interface ImageMeta {
  aperture: string
  credit: string
  camera: string
  caption: string
  created_timestamp: string
  copyright: string
  focal_length: string
  iso: string
  shutter_speed: string
  title: string
  orientation: string
  keywords: any[]
}

export interface Links {
  self: Self[]
  collection: Collection[]
  about: About[]
  author: Author[]
  replies: Reply[]
}

export interface Self {
  href: string
}

export interface Collection {
  href: string
}

export interface About {
  href: string
}

export interface Author {
  embeddable: boolean
  href: string
}

export interface Reply {
  embeddable: boolean
  href: string
}
