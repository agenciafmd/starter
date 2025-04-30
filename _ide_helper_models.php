<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Carbon\CarbonImmutable|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property int $is_active
 * @property string|null $type
 * @property string|null $api_token
 * @property int|null $role_id
 * @property int $can_notify
 * @property string|null $deleted_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereApiToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCanNotify($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

namespace Agenciafmd\Leads\Models{
/**
 * 
 *
 * @property int $id
 * @property bool $is_active
 * @property string|null $source
 * @property string|null $name
 * @property string|null $email
 * @property string|null $phone
 * @property string|null $description
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property \Carbon\CarbonImmutable|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \OwenIt\Auditing\Models\Audit> $audits
 * @property-read int|null $audits_count
 * @method static \Agenciafmd\Leads\Database\Factories\LeadFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead isActive()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead sort()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead whereSource($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Lead withoutTrashed()
 */
	class Lead extends \Eloquent implements \OwenIt\Auditing\Contracts\Auditable {}
}

namespace Agenciafmd\Postal\Models{
/**
 * 
 *
 * @property int $id
 * @property bool $is_active
 * @property string $name
 * @property string $to
 * @property string $to_name
 * @property string $subject
 * @property string|null $cc
 * @property string|null $bcc
 * @property string $slug
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property \Carbon\CarbonImmutable|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \OwenIt\Auditing\Models\Audit> $audits
 * @property-read int|null $audits_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal isActive()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal sort()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereBcc($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereCc($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereSubject($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereTo($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereToName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postal withoutTrashed()
 */
	class Postal extends \Eloquent implements \OwenIt\Auditing\Contracts\Auditable {}
}

namespace Agenciafmd\Admix\Models{
/**
 * 
 *
 * @property int $id
 * @property string|null $user_type
 * @property int|null $user_id
 * @property string $event
 * @property string $auditable_type
 * @property int $auditable_id
 * @property array<array-key, mixed>|null $old_values
 * @property array<array-key, mixed>|null $new_values
 * @property string|null $url
 * @property string|null $ip_address
 * @property string|null $user_agent
 * @property string|null $tags
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property-read \Agenciafmd\Admix\Models\User|null $admixUser
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $auditable
 * @property-read mixed $log
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit isActive()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit sort()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereAuditableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereAuditableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereEvent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereIpAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereNewValues($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereOldValues($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereTags($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereUserAgent($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Audit whereUserType($value)
 */
	class Audit extends \Eloquent implements \OwenIt\Auditing\Contracts\Audit {}
}

namespace Agenciafmd\Admix\Models{
/**
 * 
 *
 * @property int $id
 * @property bool $is_active
 * @property string $name
 * @property array<array-key, mixed> $rules
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property \Carbon\CarbonImmutable|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \OwenIt\Auditing\Models\Audit> $audits
 * @property-read int|null $audits_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role isActive()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role sort()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereRules($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Role withoutTrashed()
 */
	class Role extends \Eloquent implements \OwenIt\Auditing\Contracts\Auditable {}
}

namespace Agenciafmd\Admix\Models{
/**
 * 
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Carbon\CarbonImmutable|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 * @property bool $is_active
 * @property string|null $type
 * @property string|null $api_token
 * @property int|null $role_id
 * @property bool $can_notify
 * @property \Carbon\CarbonImmutable|null $deleted_at
 * @property mixed $avatar
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \OwenIt\Auditing\Models\Audit> $audits
 * @property-read int|null $audits_count
 * @property-read mixed $is_admin
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection<int, \Spatie\MediaLibrary\MediaCollections\Models\Media> $media
 * @property-read int|null $media_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Agenciafmd\Admix\Models\Role|null $role
 * @method static \Agenciafmd\Admix\Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User isActive()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User sort()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereApiToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCanNotify($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User withoutTrashed()
 */
	class User extends \Eloquent implements \OwenIt\Auditing\Contracts\Auditable, \Spatie\MediaLibrary\HasMedia {}
}

