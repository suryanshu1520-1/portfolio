export interface PatentClaim {
  number: number
  type: 'Independent System Claim' | 'Dependent Method Claim' | 'Dependent Sub-system Claim' | 'Dependent Hardware/Encryption Claim'
  summary: string
  fullText: string
  technicalSignificance: string
}

export interface PatentSpecification {
  id: string
  code: string
  shortName: string
  title: string
  jurisdiction: string
  filingOffice: string
  statutoryBasis: string
  statutoryStatus: 'Drafted (Form 2 Complete Specification) · Not Yet Filed'
  ipcCodes: { code: string; label: string }[]
  genesisOrRefToken: string
  shortDescription: string
  criCompliance: {
    heading: string
    precedent: string
    reasoning: string
    hardwareInteraction: string
  }
  problemSolved: {
    title: string
    clinicalContext: string
    consequences: string[]
  }
  technicalEffect: {
    title: string
    solutionArchitecture: string
    quantifiableMetrics: { label: string; value: string }[]
  }
  claims: PatentClaim[]
  form2Document: {
    preamble: string
    fieldOfInvention: string
    backgroundAndPriorArt: string
    objectsOfInvention: string[]
    detailedDescriptionSummary: string
  }
  abstract: string
  localPath: string
}

export const patents: PatentSpecification[] = [
  {
    id: 'in-pat-01',
    code: 'IN-PAT-2026-01',
    shortName: 'Bi-Temporal Merkle Odontogram',
    title: 'A System and Method for Bi-Temporal Event-Sourced Dental State Projection and Tamper-Evident Merkle Chain Ledger for Operatory Records',
    jurisdiction: 'Indian Patent Office (IPO) / CGPDTM',
    filingOffice: 'Boudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi 110078',
    statutoryBasis: 'Form 2 (Second Schedule) Complete Specification · Patents Act 1970 § 10 & Rule 13 · CRI Guidelines 2017',
    statutoryStatus: 'Drafted (Form 2 Complete Specification) · Not Yet Filed',
    ipcCodes: [
      { code: 'G16H 10/60', label: 'ICT specially adapted for the handling of patient-related medical/healthcare data' },
      { code: 'G06F 21/64', label: 'Protecting data integrity; verification of records; tamper-evidence' },
      { code: 'A61C 19/00', label: 'Dental instruments, implements or devices; dental operatory apparatus' }
    ],
    genesisOrRefToken: '0xGENESIS_HASH_DCOS_V2_GENESIS_2026_8B91FE4',
    shortDescription: 'Bi-temporal event sourcing (Valid Time vs. Transaction Time) combined with SHA-256 Merkle hash chain for non-repudiable medical-legal odontograms and ABDM FHIR R5 compliance.',
    criCompliance: {
      heading: 'Section 3(k) Non-Applicability & CRI Precedents',
      precedent: 'Ferid Allani v. Union of India (2019) SCC OnLine Del 11867 & 2017 CRI Guidelines',
      reasoning: 'The claimed invention does not claim a computer program per se or a mathematical algorithm in the abstract. Instead, it provides a tangible, real-world technical effect: the deterministic reconstruction of physical dental operatory historical states without database rollbacks, verified via unbroken cryptographic Merkle digests.',
      hardwareInteraction: 'Binds operatory clinical terminals, intraoral inspection probes, and hardware timestamps to cryptographic blocks, resolving physical evidence spoliation in medical-legal disputes.'
    },
    problemSolved: {
      title: 'Destructive UPDATEs and Historical State Spoliation in Dental Records',
      clinicalContext: 'Conventional dental Practice Management Systems (PMS) perform in-place destructive SQL UPDATE operations when charting tooth restorations or periodontal pocket depths. Once overwritten, the exact clinical state of a tooth at a prior date is irretrievably lost.',
      consequences: [
        'Destructive overwrites make it technically impossible to prove tooth condition prior to an alleged malpractice event.',
        'Database logs and audit tables can be surreptitiously modified or truncated by database administrators.',
        'ABDM and HL7 FHIR health data exchange lack unbroken cryptographic provenance for longitudinal clinical claims.'
      ]
    },
    technicalEffect: {
      title: 'Deterministic Time-Travel Projection & Unbroken Cryptographic Merkle Chain',
      solutionArchitecture: 'An append-only immutable event store records all clinical observations as monotonically incremented events with dual-time coordinate tuples (T_valid, T_transaction). A continuous SHA-256 Merkle chain binds each block to its predecessor. In-memory state replaying reconstructs 32-tooth FDI odontograms and 6-point periodontal matrices at any past millisecond coordinate without database rollbacks.',
      quantifiableMetrics: [
        { label: 'Time-Travel Query Latency', value: '< 12ms' },
        { label: 'Merkle Digest Chain Verification', value: '100% Deterministic' },
        { label: 'Cryptographic Integrity Check', value: 'SHA-256 Digest' },
        { label: 'ABDM FHIR R5 Encryption', value: 'Curve25519 ECDH + AES-GCM-256' }
      ]
    },
    claims: [
      {
        number: 1,
        type: 'Independent System Claim',
        summary: 'Append-only bi-temporal event store with dual timestamps and SHA-256 Merkle linking anchored to Genesis Hash.',
        fullText: 'A computer-implemented system for immutable, tamper-evident bi-temporal event-sourced dental operatory recording, comprising: an append-only event store configured to commit clinical dental observation events as monotonic sequence records, wherein each event records a dual-time coordinate tuple (T_valid, T_transaction) representing clinical occurrence time and database commit time respectively; a cryptographic hashing module computing a SHA-256 Merkle chain digest for each newly committed event by hashing the preceding block digest concatenated with the event payload and timestamp tuple, anchored to a predefined Genesis hash; and a deterministic projection engine configured to replay the state transitions in memory to reconstruct a complete 32-tooth odontogram state at any arbitrary historical millisecond timestamp without performing database rollbacks.',
        technicalSignificance: 'Provides legal non-repudiation and eliminates destructive database overwrites in clinical malpractice audits.'
      },
      {
        number: 2,
        type: 'Dependent Sub-system Claim',
        summary: '6-point periodontal probing depth matrix encapsulation (MB, B, DB, ML, L, DL) with anomaly trapping.',
        fullText: 'The system of claim 1, further comprising a 6-point periodontal probing depth capture array (mesiobuccal, buccal, distobuccal, mesiolingual, lingual, distolingual) committed as differential millimeter integer arrays with automated clinical anomaly trapping.',
        technicalSignificance: 'Ensures structured periodontal pocket diagnostic data is preserved alongside tooth crown restorations.'
      },
      {
        number: 3,
        type: 'Dependent Sub-system Claim',
        summary: 'Continuous SHA-256 Merkle ledger audit and verifiable integrity certificates.',
        fullText: 'The system of claim 1, wherein the cryptographic hashing module generates a verifiable Merkle verification certificate validating ledger continuity from the current root digest back to GENESIS_HASH_DCOS_V2_GENESIS_2026.',
        technicalSignificance: 'Allows third-party forensic auditors or insurance verifiers to prove mathematical integrity of all clinic records.'
      },
      {
        number: 4,
        type: 'Dependent Hardware/Encryption Claim',
        summary: 'Sovereign Fidelius Curve25519 ECDH + AES-GCM-256 bridge for ABDM Milestone 3 HL7 FHIR R5 exchange.',
        fullText: 'The system of claim 1, further comprising a sovereign health data exchange bridge serializing projected dental records into HL7 FHIR R5 bundles encrypted using Fidelius Curve25519 Elliptic Curve Diffie-Hellman (ECDH) key exchange and AES-GCM-256 cipher for Ayushman Bharat Digital Mission (ABDM) Milestone 3 integration.',
        technicalSignificance: 'Guarantees end-to-end cryptographic confidentiality across Indian national healthcare digital rails.'
      },
      {
        number: 5,
        type: 'Dependent Method Claim',
        summary: 'Method for historical state projection at arbitrary temporal coordinates for legal dispute adjudication.',
        fullText: 'A method for reconstructing historical dental states for medical-legal dispute verification, comprising: receiving an inquiry timestamp T_q; querying the append-only event store for events where T_valid <= T_q; executing sequential in-memory state delta replay; and outputting an immutable WebGL/SVG odontogram projection accompanied by an unbroken Merkle chain proof.',
        technicalSignificance: 'Provides the operational algorithm used by judicial courts and forensic examiners to reconstruct past clinical reality.'
      }
    ],
    form2Document: {
      preamble: 'THE PATENTS ACT, 1970 (39 OF 1970) & THE PATENTS RULES, 2003 · FORM 2 · COMPLETE SPECIFICATION (SECTION 10 & RULE 13)',
      fieldOfInvention: 'This invention relates to computer-implemented healthcare operating systems, and more particularly to tamper-evident bi-temporal event sourcing, cryptographic Merkle ledger chaining, and historical state projection for dental operatory records and national health data exchange.',
      backgroundAndPriorArt: 'Current dental electronic health record systems rely on relational database architectures where updating a patient record overwrites previous table cells. While transaction logs exist, they do not preserve domain-level bi-temporal distinctions between when an event physically occurred in the operatory (Valid Time) versus when it was recorded in the software (Transaction Time). Consequently, in forensic investigations or dental malpractice proceedings, the veracity of the medical record is vulnerable to spoliation challenges.',
      objectsOfInvention: [
        'To provide a non-destructive, append-only bi-temporal clinical event store.',
        'To establish an unbroken SHA-256 Merkle chain linking every dental operatory event to a Genesis hash.',
        'To enable deterministic in-memory time-travel projection of 32-tooth odontograms at any past millisecond coordinate.',
        'To provide encrypted sovereign ABDM Milestone 3 FHIR R5 health record exchange.'
      ],
      detailedDescriptionSummary: 'The system comprises an append-only event store, a cryptographic SHA-256 Merkle hashing pipeline, a deterministic bi-temporal projection engine, and an ABDM FHIR R5 cryptographic bridge. When a clinician records an observation (e.g., caries diagnosis on tooth #36 occlusal surface), a domain event is constructed with dual timestamps: T_valid = 2026-03-15T10:15:00Z and T_transaction = 2026-03-15T10:15:02.124Z. The block digest is computed as H_n = SHA256(H_{n-1} || Payload_n || T_valid || T_tx). When reconstructing historical condition at T_query, all events where T_valid <= T_query are applied sequentially onto a blank 32-tooth state aggregate.'
    },
    abstract: 'A system and method for maintaining an immutable, tamper-evident bi-temporal event-sourced dental operatory record. Clinical observations including 32-tooth odontogram diagnostics, surface restorations, and 6-point periodontal probing arrays are committed as monotonically incremented domain events. Each event incorporates a valid time, transaction time, and a SHA-256 Merkle chain hash linking to the preceding event. A bi-temporal projection engine reconstructs historical dental states at any past point in time without database rollbacks, providing non-repudiation for medico-legal audits and encrypted ABDM FHIR R5 health data exchange.',
    localPath: 'DEs/patents/IN-PATENT-01-BI-TEMPORAL-MERKLE-ODONTOGRAM.md'
  },
  {
    id: 'in-pat-02',
    code: 'IN-PAT-2026-02',
    shortName: 'Zero-Latency 3D Scanner LOD Watcher',
    title: 'A System and Method for Hardware-Agnostic Automated Ingestion and Real-Time Normalization of 3D Intraoral Volumetric Datasets via Non-Invasive Browser Kernel Watcher',
    jurisdiction: 'Indian Patent Office (IPO) / CGPDTM',
    filingOffice: 'Boudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi 110078',
    statutoryBasis: 'Form 2 (Second Schedule) Complete Specification · Patents Act 1970 § 10 & Rule 13 · CRI Guidelines 2017',
    statutoryStatus: 'Drafted (Form 2 Complete Specification) · Not Yet Filed',
    ipcCodes: [
      { code: 'G16H 30/20', label: 'ICT specially adapted for handling medical images or volumetric scans' },
      { code: 'A61C 9/00', label: 'Apparatus or methods for taking dental impressions or optical scans' },
      { code: 'G06T 17/00', label: '3D modeling for computer graphics and polygon mesh processing' }
    ],
    genesisOrRefToken: '0xLOD_KERNEL_PIPELINE_DCOS_2026_C491A2',
    shortDescription: 'Zero-driver browser File System Access API directory watcher that auto-detects multi-vendor 3D intraoral scans, synthesizes a 4-tier progressive LOD pyramid, and validates occlusal clearances chairside.',
    criCompliance: {
      heading: 'Section 3(k) Non-Applicability & Physical Transformation',
      precedent: 'Ferid Allani v. Union of India (2019) & 2017 CRI Guidelines (Technical Effect)',
      reasoning: 'The claimed invention directly interfaces with optical scanner hardware outputs and physical dental fabrication pipelines. By calculating real-time Euclidean distance fields between opposing arches and generating progressive Level-of-Detail meshes, it physically prevents improper prosthetic fabrication on 5-axis CNC dental milling machines and eliminates invasive patient rescan procedures.',
      hardwareInteraction: 'Interacts with physical intraoral scanners (TRIOS, Medit, iTero) via driverless browser directory handles, and outputs verified 3D meshes to 5-axis CAD/CAM CNC milling units.'
    },
    problemSolved: {
      title: 'Heterogeneous Hardware Silos and Chairside Ingestion Latency for 3D Dental Scans',
      clinicalContext: 'Modern dental practices utilize heterogeneous optical scanners that export massive 50MB–250MB polygon meshes (STL, PLY, OBJ). Dentists must manually locate files, install vendor-specific desktop software, and wait 2–10 minutes for cloud uploads while the patient remains in the operatory chair.',
      consequences: [
        'Significant chairside idle time while waiting for multi-hundred megabyte raw scans to upload.',
        'Late discovery of insufficient occlusal preparation clearance (distance between prepared tooth and opposing arch) only after the patient has departed.',
        'Inability to inspect high-resolution 3D models on low-power mobile or tablet operatory displays.'
      ]
    },
    technicalEffect: {
      title: 'Progressive LOD 0 Streaming (<80ms) & Real-Time Occlusal Clearance Shader',
      solutionArchitecture: 'A sandboxed browser directory watcher polls scanner export folders using the File System Access API. Upon detecting a completed scan, the client-side engine parses raw binary geometry and generates a 4-tier Level-of-Detail (LOD) pyramid. LOD 0 (95% decimated) is streamed to clinicians and lab technicians in under 80 milliseconds. An in-browser WebGL/WebGPU vertex shader computes Euclidean distance fields against opposing arch geometry, rendering an instant chromatic clearance heatmap.',
      quantifiableMetrics: [
        { label: 'Initial 3D Streaming Latency', value: '< 80ms' },
        { label: 'LOD 0 Polygon Decimation', value: '95% Reduction' },
        { label: 'Driver Installation Footprint', value: '0 KB (Browser Native)' },
        { label: 'Clearance Calculation Accuracy', value: '± 0.05 mm' }
      ]
    },
    claims: [
      {
        number: 1,
        type: 'Independent System Claim',
        summary: 'Zero-driver browser directory watcher with 4-tier progressive LOD pyramid and real-time Euclidean distance shader.',
        fullText: 'A browser-native system for zero-driver automated ingestion and real-time normalization of 3D intraoral optical scans, comprising: a sandboxed directory monitoring module executing in a web browser engine via persistent File System Access API polling (FileSystemDirectoryHandle) configured to detect filesystem write completions of heterogeneous multi-vendor intraoral scanner exports (STL, PLY, OBJ); a client-side binary geometry parsing engine synthesizing a 4-tier progressive Level-of-Detail (LOD) mesh pyramid; a progressive streaming module configured to transmit a 95% decimated coarse mesh (LOD 0) to a collaborative 3D viewer in under 80 milliseconds while asynchronously dispatching full-resolution production mesh (LOD 3) to object storage; and a real-time Euclidean distance field computation engine calculating clearance distances between prepared abutment teeth and opposing arch surfaces in intercuspal occlusion.',
        technicalSignificance: 'Eliminates chairside latency and vendor lock-in by processing 3D dental meshes directly in sandboxed browser memory.'
      },
      {
        number: 2,
        type: 'Dependent Sub-system Claim',
        summary: 'Dynamic chromatic vertex shader rendering occlusal clearance heatmaps (Red < 1.0mm, Yellow 1.0–1.5mm, Green > 1.5mm).',
        fullText: 'The system of claim 1, wherein the distance field engine feeds a WebGL/WebGPU vertex shader dynamically rendering a continuous chromatic clearance heatmap: crimson for clearance < 1.0 mm (critical failure threshold), amber for clearance 1.0–1.5 mm (marginal threshold), and emerald for clearance > 1.5 mm (optimal prosthodontic clearance).',
        technicalSignificance: 'Enables dentists to immediately identify preparation defects while the patient is still anesthetized in the operatory chair.'
      },
      {
        number: 3,
        type: 'Dependent Hardware/Encryption Claim',
        summary: 'Standardization of multi-vendor coordinate spaces and vertex normal orientations.',
        fullText: 'The system of claim 1, wherein the binary geometry parsing engine standardizes heterogeneous coordinate spaces, unit scales, and vertex normal orientations from 3Shape TRIOS, Medit i-series, Align iTero, and Carestream scanner hardware into a unified coordinate datum.',
        technicalSignificance: 'Provides universal hardware interoperability across competing scanner manufacturers.'
      },
      {
        number: 4,
        type: 'Dependent Sub-system Claim',
        summary: 'Subgingival margin delineation tool computing closed Catmull-Rom centripetal splines.',
        fullText: 'The system of claim 1, further comprising a subgingival margin delineation tool computing closed Catmull-Rom centripetal splines projected onto high-curvature prepared finish lines.',
        technicalSignificance: 'Provides precise geometric boundaries for automated CAD restoration margin adaptation.'
      },
      {
        number: 5,
        type: 'Dependent Method Claim',
        summary: 'Method for chairside preparation clearance validation prior to laboratory dispatch.',
        fullText: 'A method for chairside validation of prepared dental margins, comprising: detecting completion of a 3D optical scan file; decimating polygon topology in client memory; streaming decimated LOD 0 to an operatory HUD; computing Euclidean distance fields against opposing arch vertices; and flagging insufficient reduction areas prior to patient dismissal.',
        technicalSignificance: 'Prevents expensive prosthetic remakes by ensuring clinical preparation meets minimum ceramic structural requirements.'
      }
    ],
    form2Document: {
      preamble: 'THE PATENTS ACT, 1970 (39 OF 1970) & THE PATENTS RULES, 2003 · FORM 2 · COMPLETE SPECIFICATION (SECTION 10 & RULE 13)',
      fieldOfInvention: 'This invention relates to computer-aided dental imaging and digital prosthodontics, and more specifically to browser-native automated ingestion, progressive multi-resolution mesh decomposition, and chairside occlusal clearance validation for 3D optical intraoral scans.',
      backgroundAndPriorArt: 'Current intraoral optical scanners export volumetric surface meshes in proprietary or uncompressed binary formats exceeding 100 megabytes per arch. Clinicians must export files to desktop folders, upload them over constrained clinic broadband networks, and await laboratory feedback. If the clinician has not reduced the tooth sufficiently to accommodate the minimum thickness of restorative zirconia or porcelain, the milling laboratory must reject the case, requiring the patient to return for re-preparation and re-scanning.',
      objectsOfInvention: [
        'To eliminate proprietary scanner desktop drivers and software installations.',
        'To achieve instantaneous (<80ms) 3D mesh streaming using a 4-tier progressive LOD pyramid.',
        'To calculate real-time Euclidean distance fields between opposing arches in browser WebGL memory.',
        'To provide immediate chromatic preparation clearance warnings chairside.'
      ],
      detailedDescriptionSummary: 'The system runs entirely within sandboxed modern browser environments utilizing the File System Access API. A persistent FileSystemDirectoryHandle polls the designated scanner export directory. Upon detection of an incoming scan file (.stl, .ply, or .obj), binary array buffers are streamed into memory. An edge-collapse decimation algorithm generates LOD 0 (5% of original vertices, streamed in <80ms for immediate rotation), LOD 1 (25% vertices), LOD 2 (60% vertices), and LOD 3 (100% production resolution, uploaded asynchronously to Cloudflare R2). A custom vertex shader compares opposing arch vertex coordinates in intercuspal occlusion to generate color-coded clearance alerts.'
    },
    abstract: 'A system and method for zero-latency, driverless ingestion of 3D intraoral optical dental scans. A browser-native directory watcher monitors local scanner export folders, automatically detects completed scans, and normalizes multi-vendor 3D geometries in client memory. The system synthesizes a 4-tier progressive Level-of-Detail (LOD) pyramid, streaming a 95% decimated coarse mesh to clinicians and dental laboratories in under 80 milliseconds for immediate 3D inspection while uploading the production-grade high-density mesh asynchronously. Automated client-side occlusal clearance distance mapping identifies preparation inadequacies chairside before laboratory submission.',
    localPath: 'DEs/patents/IN-PATENT-02-ZERO-LATENCY-HARDWARE-AGNOSTIC-SCANNER-INGESTION.md'
  },
  {
    id: 'in-pat-03',
    code: 'IN-PAT-2026-03',
    shortName: 'Dual-Layer Clinical-Lab State Gate',
    title: 'A System and Method for Dual-Layer Context-Aware Clinical-Laboratory Asynchronous Messaging and Soft-Copy CAD/CAM Archival Engine',
    jurisdiction: 'Indian Patent Office (IPO) / CGPDTM',
    filingOffice: 'Boudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi 110078',
    statutoryBasis: 'Form 2 (Second Schedule) Complete Specification · Patents Act 1970 § 10 & Rule 13 · CRI Guidelines 2017',
    statutoryStatus: 'Drafted (Form 2 Complete Specification) · Not Yet Filed',
    ipcCodes: [
      { code: 'G16H 40/20', label: 'ICT specially adapted for the management or administration of healthcare facilities/labs' },
      { code: 'G06Q 50/22', label: 'Business and workflow processes specially adapted for healthcare/manufacturing' },
      { code: 'A61C 13/00', label: 'Dental prostheses; manufacture or reproduction thereof (CAD/CAM milling)' }
    ],
    genesisOrRefToken: '0xSTATE_GATE_CAD_DCOS_2026_F183C9B',
    shortDescription: 'State-machine gated clinical-laboratory real-time messaging, dual-layer operational timeline filtering, and Exocad .constructionInfo XML parameter extraction with permanent soft-copy remake warranty binding.',
    criCompliance: {
      heading: 'Section 3(k) Non-Applicability & Manufacturing Machine Control',
      precedent: 'Ferid Allani v. Union of India (2019) & 2017 CRI Guidelines (Technical Effect)',
      reasoning: 'The claimed invention directly controls manufacturing workflow states and physical CAD/CAM dental fabrication equipment (sintering ovens, 5-axis milling spindles). The generation of an immutable cryptographic remake warranty token tied to finalized Exocad restorative meshes directly modifies the physical manufacturing cycle by eliminating patient impression retakes and secondary operatory appointments.',
      hardwareInteraction: 'Controls physical dental laboratory manufacturing stages (sintering furnaces, 5-axis wet/dry milling machines) and archives CAD geometries to trigger automated re-milling.'
    },
    problemSolved: {
      title: 'Operational Clutter in Clinical-Lab Communications and High Prosthetic Remake Waste',
      clinicalContext: 'Clinicians and dental milling laboratories communicate through unorganized mobile chat applications. Clinicians bombard technicians with questions before scans have even been checked for feasibility. Furthermore, 5%–15% of restorative prostheses require remakes due to shade mismatches or minor contact tight spots, forcing full physical re-impressions or optical rescans.',
      consequences: [
        'Lab technicians spend hours answering premature inquiries instead of calibrating milling spindles.',
        'Internal laboratory rework (sintering adjustments, casting re-runs) creates unnecessary panic when exposed to clinicians without context.',
        'High financial and clinical waste when patients must undergo full re-scanning for remakes that could be milled from archived CAD data.'
      ]
    },
    technicalEffect: {
      title: 'State-Machine Gated Chat, Dual-Layer Timeline & Cryptographic Remake Token',
      solutionArchitecture: 'An order-specific finite state machine locks real-time messaging channels while cases are in DRAFT or PENDING_REVIEW states, unlocking only when a laboratory formally commits to active production (IN_PROGRESS). A dual-layer timeline partitions operational events into LAB_INTERNAL and CLINIC_EXTERNAL visibility layers. An automated Exocad .constructionInfo XML parser extracts fabrication parameters, binding the finalized restorative mesh into a permanent remake warranty token.',
      quantifiableMetrics: [
        { label: 'Premature Inquiries Eliminated', value: '100% Gated' },
        { label: 'Remake Re-scan Cycle Reduction', value: 'Zero Physical Rescans' },
        { label: 'CAD Parameter Ingestion Time', value: '< 15ms' },
        { label: 'Timeline Visibility Partitioning', value: 'Cryptographic ACL' }
      ]
    },
    claims: [
      {
        number: 1,
        type: 'Independent System Claim',
        summary: 'Order state-machine communication gate with dual-layer timeline partitioning and soft-copy CAD remake archival.',
        fullText: 'An asynchronous communication and soft-copy manufacturing archival system for prosthodontic workflows, comprising: an order state machine orchestrating dental restoration lifecycles through discrete stages including DRAFT, PENDING_REVIEW, IN_PROGRESS, SINTERING_MILLING, QC_PASSED, and DISPATCHED; a state-machine communication gate configured to lock bi-directional real-time chat channels while an order is in DRAFT or PENDING_REVIEW states and automatically unlock communication upon formal transition to IN_PROGRESS; a dual-layer timeline filtering engine enforcing access control lists that partition operational events into LAB_INTERNAL (sintering furnace cycles, milling spindle calibrations, technician notes) and CLINIC_EXTERNAL (intake, shade verification, dispatch tracking); and a soft-copy CAD archival engine generating an immutable cryptographic remake token binding finalized 3D restorative geometry to order parameters for zero-rescan prosthetic reproduction.',
        technicalSignificance: 'Shields dental technicians from premature communication while establishing an immutable audit trail for laboratory manufacturing.'
      },
      {
        number: 2,
        type: 'Dependent Sub-system Claim',
        summary: 'Automated Exocad .constructionInfo XML parser extracting material, shade, and cement clearances.',
        fullText: 'The system of claim 1, further comprising an automated Exocad .constructionInfo XML parser extracting restorative material specifications (Zirconia, Lithium Disilicate, PMMA), VITA classical/3D-Master shade data, cement space tolerances (micrometers), and marginal ridge offsets.',
        technicalSignificance: 'Eliminates manual parameter transcription errors between dental CAD design software and milling machines.'
      },
      {
        number: 3,
        type: 'Dependent Sub-system Claim',
        summary: 'Cryptographic remake token triggering automated re-milling without clinical re-scanning.',
        fullText: 'The system of claim 1, wherein the soft-copy CAD archival engine calculates a SHA-256 digest of the finalized restorative mesh, binds the digest to clinical warranty validity duration, and triggers automated re-milling upon receipt of an authorized remake token without physical re-impression or optical re-scan cycles.',
        technicalSignificance: 'Saves clinical chair time and patient discomfort by re-milling identical or adjusted restorations from verified digital archives.'
      },
      {
        number: 4,
        type: 'Dependent Hardware/Encryption Claim',
        summary: 'Cryptographic dual-layer event isolation between clinician portal and laboratory execution telemetry.',
        fullText: 'The system of claim 1, wherein internal milling calibration anomalies and technician staging discussions are cryptographically isolated from the clinician portal while transmitting verified milestone updates.',
        technicalSignificance: 'Preserves laboratory proprietary manufacturing techniques while ensuring client transparency.'
      },
      {
        number: 5,
        type: 'Dependent Method Claim',
        summary: 'Method for orchestrating prosthodontic manufacturing with state-gated communication and soft-copy CAD archival.',
        fullText: 'A method for orchestrating clinical-laboratory prosthodontic manufacturing, comprising: state-locking communication during intake triage; partitioning internal milling telemetry from clinical notifications; extracting Exocad manufacturing parameters; and archiving cryptographic soft-copy CAD tokens for zero-rescan prosthetic remakes.',
        technicalSignificance: 'Defines the operational manufacturing coordination standard across connected dental health networks.'
      }
    ],
    form2Document: {
      preamble: 'THE PATENTS ACT, 1970 (39 OF 1970) & THE PATENTS RULES, 2003 · FORM 2 · COMPLETE SPECIFICATION (SECTION 10 & RULE 13)',
      fieldOfInvention: 'This invention relates to distributed healthcare and prosthodontic workflow orchestration, and specifically to state-machine gated asynchronous communication, dual-layer operational timeline partitioning, and cryptographic soft-copy CAD/CAM archival for dental laboratories and clinics.',
      backgroundAndPriorArt: 'Dental laboratories fabricate custom restorative prostheses (crowns, bridges, veneers, implant abutments) ordered by clinical practitioners. Currently, communication is fragmented across phone calls, consumer messaging applications, and paper lab slips. Clinicians frequently interrupt laboratory technicians before cases are evaluated for clinical feasibility, creating severe operational friction. Furthermore, when remakes are necessary, clinics frequently re-scan the patient due to lack of soft-copy CAD archival, generating unnecessary costs and clinical delays.',
      objectsOfInvention: [
        'To prevent premature communication interruptions during initial case intake.',
        'To establish a dual-layer operational timeline separating internal lab steps from clinician updates.',
        'To parse structured CAD parameters directly from Exocad .constructionInfo XML files.',
        'To guarantee zero-rescan prosthetic remakes through cryptographic soft-copy CAD archival.'
      ],
      detailedDescriptionSummary: 'The system implements a deterministic state machine managing the lifecycle of prosthodontic orders. During DRAFT and PENDING_REVIEW states, the communication gate disables messaging input. When a dental technician reviews the 3D optical scan and accepts the order, transitioning it to IN_PROGRESS, the communication channel automatically unlatches. All subsequent production events are categorized into LAB_INTERNAL (e.g. 8-hour zirconia sintering temperature curve) or CLINIC_EXTERNAL (e.g. shade approved, out for delivery). Upon milling completion, the finalized STL mesh is hashed and bound to an immutable remake token.'
    },
    abstract: 'A system and method for orchestrating clinical-laboratory prosthodontic workflows. The system enforces state-machine gated communication, locking direct chat until a dental laboratory formally accepts a case into active production, thereby eliminating premature clutter. A dual-layer timeline isolates internal fabrication events from clinician-facing progress updates. The system extracts structured CAD parameters from Exocad files and cryptographically archives the final 3D milled prosthetic geometry to guarantee permanent remake warranties without clinical re-scanning.',
    localPath: 'DEs/patents/IN-PATENT-03-DUAL-LAYER-CLINICAL-PROSTHETIC-STATE-GATE.md'
  }
]
