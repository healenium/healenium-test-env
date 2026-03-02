# Healenium Test Env — What Each Button Changes

Demo page has 3 buttons. Clicking each runs a script that changes other elements' attributes. Below: **attribute**, **old value**, **new value** for every change.

---

## 1. #Submit (main page)

**Location:** `index.html`  
**Handler:** `showValidate()` in `js/main.js`

| Element (selector) | Attribute | Old value | New value |
|--------------------|-----------|-----------|-----------|
| `#logo_img` | `alt` | *(original alt)* | `Changed alt` |
| `#change_below_element` | `aria-label` | `change_tag_aria_label` | `Changed aria-label` |
| `#change_className` | `aria-labelledby` | `change_className_label` | `new_change_className_label` |
| `[name="dragGreen"]` | `innerText` | `Green Item` | `Changed: get by text` |
| `[name="dragRed"]` | `name` | `dragRed` | `darg2` |
| `#change_id_label` | `innerText` | `Field with hover` | `Changed: Field with hover` |
| `#validate_testId` | `placeholder` | `Change: TestId` | `Placeholder changed` |
| `#validate_testId` | `title` | `Validate change test id` | `Title changed` |
| `#validate_testId` | `data-testid` | `change_testId` | `new_validate_testId` |
| `#iframe_id` | `title` | `Iframe Example` | `New frame title` |
| `#change_id` | `id` | `change_id` | `newValue` |
| `#change_id` | `name` | `Field1` | `return name` |
| `#select_item` | `id` | `select_item` | `select_item_NewId` |
| `#select_item` | `name` | `item` | `item_New` |
| `#file_input` | `id` | `file_input` | `file_input_NewId` |
| `#change_className` | `class` | `test_class` | `newClass` |
| `#change_element` | tag name | `test_tag` | `input` |
| `#change_element_last_child` | tag name | `child_tag` | `input` |
| `#change_disabled` | `disabled` | `true` | `false` |
| `#change_enabled` | `disabled` | `false` | `true` |
| `#change_checked` | `checked` | `true` | `false` |
| `#change_links` | `href` | `https://healenium.io/` | `https://github.com/healenium` |
| `#change_links` | text | `Change: LinkText, PartialLinkText` | `New text here` |
| `#change:name` | `name` | `change_name` | `newName` |
| `#change:name` | `id` | `change:name` | `newName` |
| `#descendant_change` | `id` | `descendant_change` | `newDescendant` |
| `#change_wait` *(if present)* | `id` | `change_wait` | `newWaitId` |

---

## 2. #Submit_checkbox (main page)

**Location:** `index.html`  
**Handler:** `forParentSubmit()` in `js/main.js`

| Element (selector) | Attribute | Old value | New value |
|--------------------|-----------|-----------|-----------|
| `#form_checked1` | `class` | `input1` | `unchecked1` |
| `#form_checked2` | `class` | `input1` | `unchecked2` |
| `#form_checked3` | `class` | `input1` | `unchecked3` |
| `#drop1` | `data-testid` | `testid_drop1` | `newDropTestId` |
| `#drop1` | `id` | `drop1` | `new_drop_id` |

---

## 3. #iframe_Submit (inside iframe)

**Location:** `demo_frame1.html` (first iframe)  
**Handler:** `showValidate()` in `js/frame.js`

| Element (selector) | Attribute | Old value | New value |
|--------------------|-----------|-----------|-----------|
| `#iframe_input` | `id` | `iframe_input` | `iframe_input_changed` |
| `#iframe_select_item` | `name` | `iframe_item` | `iframe_item_changed` |
| `#iframe_2_id` | `title` | `Nested iframe Example` | `New title for nested frame` |
| `#iframe_2_input` *(in demo_frame2.html)* | `id` | `iframe_2_input` | `newId_iframe2` |

After these changes, the script shows an alert: **"Fields have been changed!"**
