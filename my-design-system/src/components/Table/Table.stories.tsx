import { useState, type ReactNode, type CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
  type TableColumn,
  type TableResponsiveMode,
  type TableSortDirection,
  type TableTheme,
} from './Table'

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Color theme',
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

// ─── Mock data helpers ────────────────────────────────────────────────────────

type Employee = Record<string, unknown> & {
  id: number
  name: string
  role: string
  department: string
  salary: number
  status: string
}

const EMPLOYEES: Employee[] = [
  { id: 1, name: 'Alice Thornton', role: 'Product Designer', department: 'Design', salary: 95000, status: 'Active' },
  { id: 2, name: 'Bob Kimura', role: 'Frontend Engineer', department: 'Engineering', salary: 105000, status: 'Active' },
  { id: 3, name: 'Clara Mendes', role: 'Data Analyst', department: 'Analytics', salary: 88000, status: 'Away' },
  { id: 4, name: 'David Park', role: 'UX Researcher', department: 'Design', salary: 91000, status: 'Active' },
  { id: 5, name: 'Eva Schultz', role: 'Backend Engineer', department: 'Engineering', salary: 112000, status: 'Active' },
  { id: 6, name: 'Felix Turner', role: 'QA Engineer', department: 'Engineering', salary: 82000, status: 'Inactive' },
  { id: 7, name: 'Grace Liu', role: 'Product Manager', department: 'Product', salary: 120000, status: 'Active' },
  { id: 8, name: 'Hassan Ali', role: 'DevOps Engineer', department: 'Engineering', salary: 110000, status: 'Active' },
  { id: 9, name: 'Iris Petrov', role: 'Marketing Lead', department: 'Marketing', salary: 96000, status: 'Away' },
  { id: 10, name: 'James Osei', role: 'Sales Manager', department: 'Sales', salary: 102000, status: 'Active' },
]

const BASE_COLUMNS: TableColumn<Employee>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'department', label: 'Department', sortable: true },
  { key: 'salary', label: 'Salary', sortable: true, type: 'number', align: 'right', prefix: '$' },
  { key: 'status', label: 'Status', sortable: false },
]

function generateRows(count: number): Employee[] {
  return Array.from({ length: count }, (_, i) => EMPLOYEES[i % EMPLOYEES.length])
}

function generateColumns(count: number): TableColumn<Employee>[] {
  return BASE_COLUMNS.slice(0, Math.max(1, Math.min(count, BASE_COLUMNS.length)))
}

// ─── Playground story ─────────────────────────────────────────────────────────

type PlaygroundArgs = {
  theme: TableTheme
  responsiveMode: TableResponsiveMode
  rowCount: number
  columnCount: number
  title: string
  striped: boolean
  selectable: boolean
  showToolbar: boolean
  showSearch: boolean
  showPagination: boolean
  sortable: boolean
  loading: boolean
}

export const Playground: Story = {
  name: 'Playground',
  args: {
    theme: 'light',
    responsiveMode: 'stack',
    rowCount: 5,
    columnCount: 5,
    title: 'Table title',
    striped: false,
    selectable: false,
    showToolbar: true,
    showSearch: true,
    showPagination: true,
    sortable: true,
    loading: false,
  } as unknown as PlaygroundArgs,
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
      description: 'Color theme',
    },
    rowCount: {
      name: 'rowCount',
      control: { type: 'range', min: 0, max: 20, step: 1 },
      description: 'Number of data rows',
    },
    responsiveMode: {
      control: { type: 'radio' },
      options: ['stack', 'scroll'],
      description: 'Mobile behavior below 640px',
    },
    columnCount: {
      name: 'columnCount',
      control: { type: 'range', min: 1, max: 5, step: 1 },
      description: 'Number of columns (max 5)',
    },
    title: {
      control: 'text',
      description: 'Toolbar title',
    },
    striped: {
      control: 'boolean',
      description: 'Alternate row shading',
    },
    selectable: {
      control: 'boolean',
      description: 'Show row checkboxes',
    },
    showToolbar: {
      control: 'boolean',
      description: 'Show toolbar (title + search)',
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search input',
      if: { arg: 'showToolbar' },
    },
    showPagination: {
      control: 'boolean',
      description: 'Show pagination footer',
    },
    sortable: {
      control: 'boolean',
      description: 'Enable column sorting',
    },
    loading: {
      control: 'boolean',
      description: 'Loading / disabled state',
    },
  } as unknown as Meta<typeof Table>['argTypes'],
  render: (args) => {
    const {
      theme = 'light',
      responsiveMode = 'stack',
      rowCount = 5,
      columnCount = 5,
      title = 'Table title',
      striped = false,
      selectable = false,
      showToolbar = true,
      showSearch = true,
      showPagination = true,
      sortable = true,
      loading = false,
    } = args as unknown as PlaygroundArgs

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortKey, setSortKey] = useState<string | undefined>()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sortDir, setSortDir] = useState<TableSortDirection>(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchVal, setSearchVal] = useState('')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set())
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPage, setCurrentPage] = useState(1)

    const rawData = generateRows(rowCount)
    const cols = generateColumns(columnCount).map((c) => ({
      ...c,
      sortable: sortable ? c.sortable : false,
    }))

    const filtered = rawData.filter((row) =>
      searchVal
        ? Object.values(row).some((v) => String(v).toLowerCase().includes(searchVal.toLowerCase()))
        : true,
    )

    const sorted = [...filtered].sort((a, b) => {
      if (!sortKey || !sortDir) return 0
      const av = a[sortKey]
      const bv = b[sortKey]
      const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true })
      return sortDir === 'asc' ? cmp : -cmp
    })

    const pageSize = 10
    const paged = sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize)

    const handleSort = (key: string, dir: TableSortDirection) => {
      setSortKey(key)
      setSortDir(dir)
    }

    const handleRowSelect = (key: string, checked: boolean) => {
      setSelectedKeys((prev) => {
        const next = new Set(prev)
        if (checked) next.add(key)
        else next.delete(key)
        return next
      })
    }

    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelectedKeys(new Set(paged.map((_, i) => String(i))))
      } else {
        setSelectedKeys(new Set())
      }
    }

    const wrapperStyle: CSSProperties = {
      background: theme === 'dark' ? '#04070d' : '#f0f2f5',
      borderRadius: 16,
      padding: 24,
    }

    return (
      <div style={wrapperStyle}>
        <Table
          theme={theme}
          responsiveMode={responsiveMode}
          columns={cols}
          data={paged}
          rowKey={(_, i) => String(i)}
          title={showToolbar ? title : undefined}
          showSearch={showSearch}
          showToolbar={showToolbar}
          showPagination={showPagination}
          striped={striped}
          selectable={selectable}
          selectedRowKeys={selectedKeys}
          onRowSelect={handleRowSelect}
          onSelectAll={handleSelectAll}
          searchValue={searchVal}
          onSearch={(v) => { setSearchVal(v); setCurrentPage(1) }}
          sortKey={sortKey}
          sortDirection={sortDir}
          onSort={handleSort}
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={filtered.length}
          onPageChange={setCurrentPage}
          loading={loading}
        />
      </div>
    )
  },
}

// ─── All Tables story ─────────────────────────────────────────────────────────

function TableDemo({
  theme,
  label,
  children,
}: {
  theme: TableTheme
  label: string
  children: ReactNode
}) {
  const bgStyle: CSSProperties = {
    background: theme === 'dark' ? '#04070d' : '#f0f2f5',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 24,
  }
  const labelStyle: CSSProperties = {
    color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : '#545454',
    fontFamily: 'inherit',
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '0.04em',
    margin: 0,
    textTransform: 'uppercase',
  }
  return (
    <div style={bgStyle}>
      <p style={labelStyle}>{label}</p>
      {children}
    </div>
  )
}

const DEMO_COLS: TableColumn<Employee>[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'department', label: 'Department' },
  { key: 'salary', label: 'Salary', type: 'number', align: 'right', prefix: '$' },
  { key: 'status', label: 'Status' },
]

function TableFrameDemo({ theme }: { theme: TableTheme }) {
  const [page, setPage] = useState(1)
  const pageSize = 10
  const data = generateRows(10)

  return (
    <Table
      theme={theme}
      title="Table title"
      columns={DEMO_COLS}
      data={data}
      rowKey={(_, i) => String(i)}
      showToolbar
      showSearch
      showPagination
      currentPage={page}
      pageSize={pageSize}
      totalItems={data.length}
      onPageChange={setPage}
    />
  )
}

function RowStatesFrameDemo({ theme }: { theme: TableTheme }) {
  const headerTextColor = theme === 'dark' ? '#ffffff' : '#292929'
  const isDark = theme === 'dark'
  const frameStyle: CSSProperties = {
    width: isDark ? 880 : 912,
    display: 'flex',
    flexDirection: 'column',
    gap: isDark ? 18 : 16,
    padding: isDark ? 0 : 16,
    boxSizing: 'border-box',
  }
  const rowWidthStyle: CSSProperties = { width: 880, tableLayout: 'fixed' }
  const headerCellStyle: CSSProperties = { minWidth: 176, color: headerTextColor, width: 176 }
  const bodyCellStyle: CSSProperties = { minWidth: 176, width: 176 }

  return (
    <div className={`ds-table ds-table--${theme}`} style={frameStyle}>
      <table className="ds-table__table" style={rowWidthStyle}>
        <tbody>
          <tr className="ds-table__row ds-table__row--header" style={{ height: 48 }}>
            <TableHeaderCell style={headerCellStyle}>Cell Label</TableHeaderCell>
            <TableHeaderCell style={headerCellStyle}>Cell Label</TableHeaderCell>
            <TableHeaderCell style={headerCellStyle}>Cell Label</TableHeaderCell>
            <TableHeaderCell style={headerCellStyle}>Cell Label</TableHeaderCell>
            <TableHeaderCell style={headerCellStyle}>Cell Label</TableHeaderCell>
          </tr>
        </tbody>
      </table>

      <table className="ds-table__table" style={rowWidthStyle}>
        <tbody>
          <TableRow state="default" style={{ height: 64 }}>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
          </TableRow>
        </tbody>
      </table>

      <table className="ds-table__table" style={rowWidthStyle}>
        <tbody>
          <TableRow state="alternate" style={{ height: 64 }}>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
          </TableRow>
        </tbody>
      </table>

      <table className="ds-table__table" style={rowWidthStyle}>
        <tbody>
          <TableRow state="hover" style={{ height: 64 }}>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
          </TableRow>
        </tbody>
      </table>

      <table className="ds-table__table" style={rowWidthStyle}>
        <tbody>
          <TableRow state="selected" style={{ height: 64 }}>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
            <TableCell style={bodyCellStyle}>Cell Label</TableCell>
          </TableRow>
        </tbody>
      </table>
    </div>
  )
}

function CellFrameDemo({ theme }: { theme: TableTheme }) {
  const headerTextColor = theme === 'dark' ? 'var(--ds-table-header-text)' : 'var(--ds-table-header-text)'
  const isDark = theme === 'dark'
  const frameStyle: CSSProperties = {
    width: isDark ? 109 : 141,
    display: 'flex',
    flexDirection: 'column',
    gap: isDark ? 13 : 16,
    padding: isDark ? 0 : 16,
    boxSizing: 'border-box',
  }

  return (
    <div className={`ds-table ds-table--${theme}`} style={frameStyle}>
      <table className="ds-table__table" style={{ width: 109, tableLayout: 'fixed' }}>
        <tbody>
          <tr className="ds-table__row ds-table__row--header" style={{ height: 26 }}>
            <td className="ds-table__cell" style={{ width: 109, minWidth: 109, padding: '8px 16px' }}>
              <span
                style={{
                  color: headerTextColor,
                  display: 'block',
                  fontFamily: 'var(--ui-font-family)',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                Cell Label
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="ds-table__table" style={{ width: 64, tableLayout: 'fixed' }}>
        <tbody>
          <tr className="ds-table__row" style={{ height: 40 }}>
            <td className="ds-table__cell" style={{ width: 64, minWidth: 64, padding: '8px 16px 8px 24px' }}>
              <span
                style={{
                  alignItems: 'center',
                  background: 'var(--ds-table-checkbox-bg)',
                  border: '2px solid var(--ds-table-checkbox-border)',
                  borderRadius: 8,
                  boxSizing: 'border-box',
                  display: 'inline-flex',
                  height: 24,
                  justifyContent: 'center',
                  width: 24,
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="ds-table__table" style={{ width: 64, tableLayout: 'fixed' }}>
        <tbody>
          <tr className="ds-table__row" style={{ height: 40 }}>
            <td className="ds-table__cell" style={{ width: 64, minWidth: 64, padding: '8px 16px 8px 24px' }}>
              <span
                style={{
                  alignItems: 'center',
                  background: 'var(--ds-table-checkbox-bg)',
                  border: '2px solid var(--ds-table-pagination-btn-text)',
                  borderRadius: 8,
                  boxSizing: 'border-box',
                  color: 'var(--ds-table-pagination-btn-text)',
                  display: 'inline-flex',
                  height: 24,
                  justifyContent: 'center',
                  width: 24,
                }}
              >
                <svg className="ds-table__check-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3.5 8L6.5 11L12.5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="ds-table__table" style={{ width: 109, tableLayout: 'fixed' }}>
        <tbody>
          <tr className="ds-table__row" style={{ height: 40 }}>
            <td className="ds-table__cell" style={{ width: 109, minWidth: 109, padding: '8px 16px' }}>
              <span className="ds-table__cell-text">Cell Label</span>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="ds-table__table" style={{ width: 109, tableLayout: 'fixed' }}>
        <tbody>
          <tr className="ds-table__row" style={{ height: 40 }}>
            <td className="ds-table__cell" style={{ width: 109, minWidth: 109, padding: '8px 16px' }}>
              <span
                style={{
                  color: 'var(--ds-table-row-text)',
                  display: 'flex',
                  fontFamily: 'var(--ui-font-family)',
                  fontSize: 16,
                  fontWeight: 400,
                  gap: 8,
                  justifyContent: 'flex-end',
                  lineHeight: 1.5,
                  width: '100%',
                }}
              >
                <span style={{ flexShrink: 0 }}>$</span>
                <span style={{ flex: '1 1 auto', minWidth: 0, overflow: 'hidden', textAlign: 'right', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  99999.99
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="ds-table__table" style={{ width: 109, tableLayout: 'fixed' }}>
        <tbody>
          <tr className="ds-table__row" style={{ height: 36 }}>
            <td className="ds-table__cell" style={{ width: 109, minWidth: 109, padding: '8px 16px' }}>
              <span
                style={{
                  color: 'var(--ds-table-row-text)',
                  display: 'inline-flex',
                  fontSize: 20,
                  lineHeight: 1,
                }}
              >
                ☆
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export const AllTables: Story = {
  name: 'All Tables',
  parameters: {
    controls: { include: ['theme'] },
  },
  render: ({ theme = 'light' }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <TableDemo theme={theme} label="1 — Row (25177:22043 / 25177:22462)">
        <RowStatesFrameDemo theme={theme} />
      </TableDemo>

      <TableDemo theme={theme} label="2 — Table (22849:8675 / 25177:21625)">
        <TableFrameDemo theme={theme} />
      </TableDemo>

      <TableDemo theme={theme} label="3 — Cell (22844:185 / 25244:13095)">
        <CellFrameDemo theme={theme} />
      </TableDemo>
    </div>
  ),
}
