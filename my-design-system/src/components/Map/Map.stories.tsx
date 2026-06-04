import type { Meta, StoryObj } from '@storybook/react'
import { Map, type MapPin } from './Map'
import mapImg from '../../assets/map.png'

const pins: MapPin[] = [
  {
    id: '1',
    x: 22,
    y: 42,
    label: 'Dubai Festival City',
    description:
      'A vibrant waterfront destination featuring retail, dining, hotels and entertainment along Dubai Creek.',
    thumbnail: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=200',
    country: 'ae',
    project: 'festival',
  },
  {
    id: '2',
    x: 28,
    y: 55,
    label: 'Festival Plaza',
    description: 'Community-focused retail destination in Jebel Ali, Dubai.',
    thumbnail: 'https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=200',
    country: 'ae',
    project: 'festival',
  },
  {
    id: '3',
    x: 35,
    y: 38,
    label: 'Al Badia',
    description: 'Mixed-use residential and lifestyle community in Dubai Festival City.',
    thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200',
    country: 'ae',
    project: 'badia',
  },
  {
    id: '4',
    x: 48,
    y: 50,
    label: 'Riyadh Hub',
    description: 'Flagship commercial hub anchoring our Saudi Arabia operations.',
    thumbnail: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=200',
    country: 'sa',
    project: 'hub',
  },
  {
    id: '5',
    x: 62,
    y: 45,
    label: 'Doha Site',
    description: 'Strategic logistics and retail site in the heart of Doha.',
    thumbnail: 'https://images.unsplash.com/photo-1568797629192-789acf8e4df3?w=200',
    country: 'qa',
    project: 'hub',
  },
  {
    id: '6',
    x: 70,
    y: 60,
    label: 'Muscat Project',
    description: 'Residential development blending heritage architecture with modern living.',
    thumbnail: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=200',
    country: 'om',
    project: 'badia',
  },
  {
    id: '7',
    x: 55,
    y: 70,
    label: 'Salalah',
    description: 'Coastal festival and leisure destination on the Arabian Sea.',
    thumbnail: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=200',
    country: 'om',
    project: 'festival',
  },
  {
    id: '8',
    x: 80,
    y: 40,
    label: 'Karachi',
    description: 'Regional hub serving South Asian markets and partners.',
    thumbnail: 'https://images.unsplash.com/photo-1589649222264-5f12087fa3f8?w=200',
    country: 'pk',
    project: 'hub',
  },
]

const meta: Meta<typeof Map> = {
  title: 'Components/Map',
  component: Map,
  parameters: { layout: 'fullscreen' },
  args: {
    title: 'Our Global Reach',
    description:
      'Al-Futtaim Group landmark projects include Dubai Festival City, Festival Plaza, and Al Badia, shaping vibrant communities with world-class infrastructure.',
    mapImage: mapImg,
    pins,
    countries: [
      { label: 'UAE', value: 'ae' },
      { label: 'Saudi Arabia', value: 'sa' },
      { label: 'Qatar', value: 'qa' },
      { label: 'Oman', value: 'om' },
      { label: 'Pakistan', value: 'pk' },
    ],
    projects: [
      { label: 'Festival', value: 'festival' },
      { label: 'Al Badia', value: 'badia' },
      { label: 'Hub', value: 'hub' },
    ],
  },
}
export default meta

type Story = StoryObj<typeof Map>

export const Light: Story = {
  args: { mode: 'light' },
  render: (args) => (
    <div style={{ padding: 24, background: '#f5f7fa' }}>
      <Map {...args} style={{ minHeight: 480 }} />
    </div>
  ),
}

export const Dark: Story = {
  args: { mode: 'dark' },
  render: (args) => (
    <div style={{ padding: 24, background: '#0a111a' }}>
      <Map {...args} style={{ minHeight: 480 }} />
    </div>
  ),
}

export const WithActivePopup: Story = {
  args: { mode: 'light', activePinId: '3' },
  render: (args) => (
    <div style={{ padding: 24, background: '#f5f7fa' }}>
      <Map {...args} style={{ minHeight: 480 }} />
    </div>
  ),
}
